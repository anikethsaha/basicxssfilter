<p align="center">

  <img alt="b logo" src="https://imgur.com/nqnrVNf.png" width="170px" />

</p>

<p align="center">
  This is a basic xss filter for node.js. 
</p>



[![Build Status](https://travis-ci.org/anikethsaha/basicxssfilter.svg?branch=master)](https://travis-ci.org/anikethsaha/basicxssfilter)
[![npm version](https://badge.fury.io/js/basicxss.svg)](https://badge.fury.io/js/basicxss)
[![NPM Downloads](https://img.shields.io/npm/dm/basicxss.svg?style=flat)](https://www.npmjs.com/package/basicxss)
[![GitHub license](https://img.shields.io/github/license/anikethsaha/basicxssfilter.svg)](https://github.com/anikethsaha/basicxssfilter)
&nbsp;
# Installation

```bash
$ npm i basicxss --save
```

# How To Use
This is the most simple part till now :)
```bash
const basicxss = require('basicxss');
```

Then after this call the its function i.e `basicxss(arg)` and pass the string to be filtered in the argument.

## Type
```bash
arg : string


basicxss(arg)
```




# License
```
MIT License

Copyright (c) 2019 Anix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
