let fs = require('fs');
let path = require("path");
let folderpath = path.join(__dirname,"download");

// console.log(folderpath);

let folderExists = fs.existsSync(folderpath);
let extensions = {
    Audio :[".mp3"],
    video :[".mp4",".mkv"],
    document:[".doc",".xlsx",".pdf",".txt"],
    image:[".jpeg",".jpg",".png",".gif"],
    software:[".exe"]
};



if(folderExists)
{
    // console.log("path is valid");
    //if the path is valid then we have to read the files inside the folder
    let files = fs.readdirSync(folderpath);
    for(let i=0;i<files.length;i++)
    {
        let ext  = path.extname(files[i]);
        // console.log(ext);
                let nameoffolder = givefoldername(ext);
            // console.log("ext--",ext,"folder--",nameoffolder);
           let pathoffolder = path.join(folderpath,nameoffolder);
           let exist = fs.existsSync(pathoffolder);
           if(exist)
           {
                movefile(folderpath,pathoffolder,files[i]);
           }
           else{
            fs.mkdirSync(pathoffolder);   
            movefile(folderpath,pathoffolder,files[i]);
        }
    }
}
else{
    //we have kept this condition so that hamara code fat na jaaye

    console.log("path is invalid");

}


function givefoldername(ext)
{
for(let key in extensions)
{
    let extArr = extensions[key];//this will access the object 
    for(let i=0;i<extArr.length;i++)
    {
        if(extArr[i] == ext)
        {
            return key;
        }
    
    }
}
return 'others'
}

function movefile(folderpath,pathoffolder,filename){
    let sourcepath = path.join(folderpath,filename);
    let destpath = path.join(pathoffolder,filename);
    fs.copyFileSync(sourcepath,destpath);
    fs.unlinkSync(sourcepath);
}