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

To make sure everything works as expected, run `deck version`.