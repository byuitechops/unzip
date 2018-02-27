# Unzip
### *Package Name*: unzip
### *Child Type*: Shell
### *Platform*: All
### *Required*: Required

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose
This shell module unzips the D2L course export given by the course downloader so the files can be parsed and altered.

## How to Install

```
npm install https://github.com/byuitechops/unzip.git
```

## Run Requirements
This child module requires the following fields in the course.info object:
* `originalZipFilePath`
* `unzippedPath`


## Options
None

## Outputs
None

## Process
1. Unzip the directory

## Log Categories
This module does not use course.log anywhere.

## Requirements
We need to be able to unzip the D2L .zip export file so it can be pared and updated.