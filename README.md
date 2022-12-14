GitHub action that install Python requirements
==============================================

This repository contains a simple GitHub action that install Python dependencies
listed in a requirement text file.

Usage
=====

```yaml
uses: aabadie/install-python-requirements@main
with:
  requirements: requirements.txt
  update-pip: true
```
