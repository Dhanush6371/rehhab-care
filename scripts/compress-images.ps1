# Image Compression Script using ImageMagick
$imagesDir = Join-Path $PSScriptRoot "..\public\images"
$backupDir = Join-Path $PSScriptRoot "..\public\images-backup"

if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "Created backup directory" -ForegroundColor Green
}

Write-Host "Starting image compression..." -ForegroundColor Cyan

function Compress-Image {
    param([string]$fileName, [string]$outputFormat, [int]$quality, [int]$maxWidth)
    
    $inputPath = Join-Path $imagesDir $fileName
    $backupPath = Join-Path $backupDir $fileName
    
    if (-not (Test-Path $inputPath)) {
        Write-Host "File not found: $fileName" -ForegroundColor Red
        return
    }
    
    Copy-Item $inputPath $backupPath -Force
    $originalSize = (Get-Item $inputPath).Length / 1KB
    
    Write-Host "Processing: $fileName (Original: $([math]::Round($originalSize, 2)) KB)"
    
    $outputFileName = $fileName -replace '\.(png|jpg|jpeg)$', ".$outputFormat"
    $outputPath = Join-Path $imagesDir $outputFileName
    
    & magick $inputPath -resize "${maxWidth}x>" -quality $quality -strip $outputPath
    
    if ($LASTEXITCODE -eq 0) {
        $newSize = (Get-Item $outputPath).Length / 1KB
        $savings = [math]::Round((1 - $newSize / $originalSize) * 100, 2)
        Write-Host "  Compressed: $([math]::Round($newSize, 2)) KB (Saved: $savings%)" -ForegroundColor Green
        
        if ($outputFileName -ne $fileName) {
            Remove-Item $inputPath -Force
        }
    }
}

# Compress images
Write-Host "`nCompressing service images..." -ForegroundColor Cyan
Compress-Image "service-1.png" "webp" 80 800
Compress-Image "service-2.png" "webp" 80 800
Compress-Image "service-3.png" "webp" 80 800
Compress-Image "service-4.png" "webp" 80 800
Compress-Image "service-5.png" "webp" 80 800
Compress-Image "service-6.png" "webp" 80 800

Write-Host "`nCompressing team photos..." -ForegroundColor Cyan
Compress-Image "team-1.jpg" "jpg" 75 800
Compress-Image "team-2.jpg" "jpg" 75 800
Compress-Image "team-3.jpg" "jpg" 75 800
Compress-Image "team-4.jpg" "jpg" 75 800

Write-Host "`nCompressing logo..." -ForegroundColor Cyan
Compress-Image "logo.png" "png" 80 500

Write-Host "`nCompressing hip pain image..." -ForegroundColor Cyan
Compress-Image "hip_pain.png" "webp" 80 800

Write-Host "`nDone! Backups saved to: $backupDir" -ForegroundColor Green
