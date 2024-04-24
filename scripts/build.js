import zl from 'zip-lib'
import {fileURLToPath} from 'node:url'
import {readJson} from './utils.js'
import fse from 'fs-extra'
import path from 'node:path'

function readVersion() {
    return readJson('../src/manifest.json').version
}

export async function build() {
    const src = fileURLToPath(new URL('../src', import.meta.url))
    const tmp = fileURLToPath(new URL('../tmp_' + Date.now(), import.meta.url))
    fse.copySync(src, tmp)
    fse.removeSync(path.join(tmp, '_metadata'))
    const zip = fileURLToPath(new URL(`../releases/jsoncracker-v${readVersion()}.zip`, import.meta.url))
    await zl.archiveFolder(tmp, zip)
    console.log('构建完成')
    fse.removeSync(tmp)
}

build()
