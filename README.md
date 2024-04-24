<div align="center">

<h1 align="center">jsoncracker</h1>

English / [简体中文](./README_CN.md)

Use the Pro editor of [JSON CRACK](https://pro.jsoncrack.com/) for free
</div>


## Installation

Download the latest version of jsoncracker.zip from [Release page](https://github.com/jooooock/jsoncracker/releases) and unzip it, then follow [this tutorial](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) to install.


## Usage

After installation, enable the extension and then directly visit https://pro.jsoncrack.com/editor.


## Customize account

If you want to customize the account displayed on the page, you can modify the `overrides/refresh_token.json` file under the decompression directory, as shown below:

```json
{
  "access_token": "...",
  "refresh_token": "a fake refresh token",
  "expires_at": 0,
  "expires_in": "never",
  "user": {
    "user_metadata": {
      "name": "<USER NAME>",
      "avatar_url": "<USER AVATAR>"
    },
    "email": "<USER EMAIL>"
  },
  "__from__": "jsoncracker"
}
```
