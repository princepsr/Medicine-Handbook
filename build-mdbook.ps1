# Builds the mdBook version of the handbook.
# The Markdown chapters stay the single source of truth. This script copies them
# into mdbook/src, writes SUMMARY.md from each chapter's first heading, and runs mdbook.
# Private material (my-reports, CLAUDE.md) is never copied.
#
# Usage:   powershell -ExecutionPolicy Bypass -File .\build-mdbook.ps1
# Preview: mdbook serve mdbook --open
param([switch]$NoBuild)

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)
$book = Join-Path $root 'mdbook'
$src  = Join-Path $book 'src'

$parts = @(
  @('00-start-here',        'Start here'),
  @('01-body',              'The body'),
  @('02-diseases',          'Diseases (worked examples)'),
  @('03-tests',             'Tests and reports'),
  @('04-medicines',         'Medicines'),
  @('05-nutrition',         'Nutrition'),
  @('06-life-stages',       'Life stages'),
  @('07-prevention',        'Prevention'),
  @('08-decisions',         'Decisions'),
  @('09-indian-healthcare', 'Indian healthcare'),
  @('10-practical',         'Practical'),
  @('appendix',             'Appendix')
)

# Fresh source folder.
if (Test-Path $src) { Remove-Item $src -Recurse -Force }
New-Item -ItemType Directory -Path $src | Out-Null

foreach ($p in $parts) { Copy-Item (Join-Path $root $p[0]) (Join-Path $src $p[0]) -Recurse }
if (Test-Path (Join-Path $root 'images')) { Copy-Item (Join-Path $root 'images') (Join-Path $src 'images') -Recurse }
foreach ($f in 'README.md','ROADMAP.md','REVIEW-GUIDE.md','FACT-CHECK-LOG.md','IMAGE-CREDITS.md') {
  if (Test-Path (Join-Path $root $f)) { Copy-Item (Join-Path $root $f) (Join-Path $src $f) }
}

function Get-Title($path) {
  foreach ($line in [IO.File]::ReadAllLines($path, $utf8)) {
    if ($line -match '^#\s+(.+)$') { return $Matches[1].Trim() }
  }
  return [IO.Path]::GetFileNameWithoutExtension($path)
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('# Summary')
[void]$sb.AppendLine('')
[void]$sb.AppendLine('[About this handbook](README.md)')
[void]$sb.AppendLine('')
foreach ($p in $parts) {
  $dir = Join-Path $src $p[0]
  $files = Get-ChildItem $dir -Filter *.md | Sort-Object Name
  if (-not $files) { continue }
  [void]$sb.AppendLine('# ' + $p[1])
  [void]$sb.AppendLine('')
  foreach ($f in $files) {
    $title = (Get-Title $f.FullName) -replace '\[','(' -replace '\]',')'
    [void]$sb.AppendLine("- [$title]($($p[0])/$($f.Name))")
  }
  [void]$sb.AppendLine('')
}
[void]$sb.AppendLine('# About the book')
[void]$sb.AppendLine('')
foreach ($x in @(@('ROADMAP.md','Roadmap and scope'), @('REVIEW-GUIDE.md','Guide for the reviewing doctor'), @('FACT-CHECK-LOG.md','Fact-check log'), @('IMAGE-CREDITS.md','Image credits'))) {
  if (Test-Path (Join-Path $src $x[0])) { [void]$sb.AppendLine("- [$($x[1])]($($x[0]))") }
}
[IO.File]::WriteAllText((Join-Path $src 'SUMMARY.md'), $sb.ToString(), $utf8)

if ($NoBuild) { Write-Host "Source ready in $src"; return }
if (-not (Get-Command mdbook -ErrorAction SilentlyContinue)) { throw 'mdbook is not installed. Install it from https://rust-lang.github.io/mdBook/' }
& mdbook build $book
Write-Host "Built: $(Join-Path $book 'book\index.html')"
