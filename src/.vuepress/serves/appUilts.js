import fsExtra from 'fs-extra';
import path from "path";
/**
https://theme-hope.vuejs.press/zh/config/theme/layout.html
只需要两层
*/
const getFileName = (fileName)=>{
    return fileName.split('.md')[0]
}

const isExcludeFiles = (fileName)=>{
    return ["README.md","CHANGELOG.md"].includes(fileName)
}

export const onNewSidebar = () => {
    const rootPath = "docs";
    const root = path.join(__dirname, `../../${rootPath}`);
    const dirs = fsExtra.readdirSync(root);
    const sidebarList = [];
    //第一层目录
    for (let i = 0; i < dirs.length; i++) {
        const item = {
            text: dirs[i],
            children: []
        }
        if (dirs[i].indexOf(".md") == -1) {
            // 第二层文件
            const files = fsExtra.readdirSync(path.join(root, `/${dirs[i]}`));
            for (let j = 0; j < files.length; j++) {
                if(!isExcludeFiles(files[j])){
                    const fileName = getFileName(files[j]);
                    item.children.push({
                        text: fileName,
                        link: `${rootPath}/${dirs[i]}/${fileName}`
                    })
                }
                
            }
        }
        if(!isExcludeFiles(dirs[i])){
            sidebarList.push(item)
        }
    }
    console.log(JSON.stringify(sidebarList,'',6),)
    return sidebarList;

}