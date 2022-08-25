---
title: Installation
sidebar_position: 3
description: How to install the deck CLI on a development machine
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="macos" label="MacOS (Universal)" default>

We provide a simple installation script, which will take care for everything:

```bash
curl -sSL https://raw.githubusercontent.com/getdeck/getdeck/main/install.sh | sh -
```

</TabItem>
<TabItem value="windows" label="Windows">
You can download the latest release from <a href="https://github.com/Getdeck/getdeck/releases/">https://github.com/Getdeck/getdeck/releases/</a> and extract the binary on your local machine.
Chocolatey will be available soon. If you can support this project with packaging and distribution for Windows, please get in touch!
</TabItem>
<TabItem value="linux" label="Linux" default>

We provide a simple installation script, which will take care of everything:

```bash
curl -sSL https://raw.githubusercontent.com/getdeck/getdeck/main/install.sh | sh -
```

</TabItem>
</Tabs>
		

<hr/>

# Verify

import { useEffect } from 'react';
export const Termynal = (props) => {
    useEffect(() => {
        setTimeout(() => {
            let termynal = new window.Termynal('#termynal')
        }, 1000)
    })
    return (
        <div>
            <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/316871/termynal.min.js" data-termynal-container="#termynal"></script>
            <div id="termynal">
                {props.children}
            </div>
        </div>
    )
}

<Termynal>
<span data-ty="input">pip install spacy</span>
<span data-ty="progress"></span>
<span data-ty>Successfully installed spacy</span>
<span data-ty></span>
<span data-ty="input">python -m spacy download en</span>
<span data-ty="progress"></span>
<span data-ty>Installed model 'en'</span>
<span data-ty></span>
<span data-ty="input">python</span>
</Termynal>

To make sure everything works as expected, run `deck version`.
