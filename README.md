GitHub action that install Python requirements
==============================================

This repository contains a simple GitHub action that install Python dependencies
listed in a requirement text file.

Usage
=====

```yaml
uses: aabadie/action-install-python-requirements@v2.0.1
with:
  requirements: requirements.txt
  update-pip: true
```
