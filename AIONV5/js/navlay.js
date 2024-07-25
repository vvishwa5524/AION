
    var i=0;
    var q=0;
    var r=0;
    var chatHistory=0;
    var promptLibrary=0;
    function closegrid(){
        document.getElementById("statistic").style.display = "none";
        document.getElementById("columns3").style.gridTemplateColumns = " 1fr 0fr";

    }
    function opengrid(){
        document.getElementById("columns3").style.gridTemplateColumns = " .75fr .25fr";
        document.getElementById("statistic").style.display = "grid";
    }
    function changeDimension(){
      if(window.innerWidth>=810){
        i++;
        if(i%2!==0){
            const itemDetails = document.querySelectorAll(".item-detail"); // Selects all elements with class "item-detail"
            itemDetails.forEach(item => {
            item.style.display = "inline-block";
          });  
          if(chatHistory%2 !=0 || promptLibrary%2 !=0){
            document.getElementById("main-col-contain").style.gridTemplateColumns = "0.15fr 0.18fr 0.67fr";
          }
          else{
            document.getElementById("main-col-contain").style.gridTemplateColumns = ".15fr  .85fr";
          }      
        const imageElement = document.getElementById("aion-logo"); 
        imageElement.src="images/Group 40.png";
        imageElement.style.height="100%";
        imageElement.style.width="40%";
        imageElement.style.marginLeft="2rem";
        document.getElementById("toggle-main").style.display="block";
        // document.getElementById("og").style.display="none";        
          document.getElementById("title-text-gen").style.display = "block";
        document.getElementById("center-gen").style.width="80%";
           document.getElementById("center-gen").style.justifyContent="flex-start";
           document.getElementById("version").style.display = "block";
           document.getElementById("profile-details").style.display = "inline-flex";
           document.getElementById("buttonui").style.display = "flex";
           document.getElementById("title-text2").style.width = "97%";
           document.getElementById("title-text2").style.justifyContent = "flex-start";
           document.getElementById("img-icon").style.height = "7vh";
           document.getElementById("img-icon").style.width = "auto";
           document.getElementById("img-icon").style.marginLeft = ".8rem";
           document.getElementById("title-text2").style.marginTop = "0.5rem";
           document.getElementById("title-text2").style.marginBottom = "0.5rem";
           document.getElementById("toggle-main").style.right = "1%";
           document.getElementById("profile-img").style.width="25%";
           document.getElementById("profile-img").style.height="60%";
           document.getElementById("profile-img").style.position="relative";
           document.getElementById("profile-img").style.bottom="0rem";
           document.getElementById("profile").style.backgroundColor="#434e8fb5";/////////
           document.getElementById("widthofprof").style.marginTop="0";
           document.getElementById("widthofprof").style.position="relative";
           document.getElementById("widthofprof").style.height="100%";
           document.getElementById("coulmn1-last-div").style.backgroundImage="url(images/back.png)";
           const menuitemDetails = document.querySelectorAll(".menu-list-itemz"); // Selects all elements with class "item-detail"
          menuitemDetails.forEach(item => {
          item.style.display = "flex";
          item.style.marginBottom="0rem";
          item.style.justifyContent = "center";
        });
       const imageicons = document.querySelectorAll(".image2"); // Selects all elements with class "item-detail"
          imageicons.forEach(item => {
        item.style.height = "2rem";
        item.style.width="2rem";
    }); }
    else{
       document.getElementById("toggle-main").style.display="none";
       if(chatHistory%2 !=0 || promptLibrary%2 !=0){
          document.getElementById("main-col-contain").style.gridTemplateColumns = "0.05fr 0.18fr 0.77fr";
        }
        else{
          document.getElementById("main-col-contain").style.gridTemplateColumns = "0.05fr 0.95fr";
        }
       const itemDetails = document.querySelectorAll(".item-detail"); // Selects all elements with class "item-detail"
          itemDetails.forEach(item => {
          item.style.display = "";
        });
       const imageElement = document.getElementById("aion-logo");
       imageElement.src="images/G.png";
       imageElement.style.height="";
       imageElement.style.width="";
       document.getElementById("title-text-gen").style.display = "";
        document.getElementById("version").style.display = "";
        document.getElementById("profile-details").style.display = "";
        document.getElementById("buttonui").style.display = "";
        document.getElementById("title-text2").style.width = "";
        document.getElementById("title-text2").style.justifyContent = "";
        document.getElementById("center-gen").style.justifyContent = "center";
        document.getElementById("img-icon").style.height = "";
        document.getElementById("img-icon").style.width = "";
        document.getElementById("img-icon").style.marginLeft = "1rem";
        document.getElementById("title-text2").style.marginTop = "";
        document.getElementById("title-text2").style.marginBottom = "17%";
        document.getElementById("profile-img").style.width="";
        document.getElementById("profile").style.backgroundColor="";
        document.getElementById("columns3").style.gridTemplateColumns = "";
        document.getElementById("widthofprof").style.marginTop="";
        document.getElementById("coulmn1-last-div").style.backgroundImage="none";
        const menuitemDetails = document.querySelectorAll(".menu-list-itemz"); // Selects all elements with class "item-detail"
        menuitemDetails.forEach(item => {
        item.style.display = "";
        item.style.marginBottom="";
        item.style.justifyContent = "";
      });
    const imageicons = document.querySelectorAll(".image2"); // Selects all elements with class "item-detail"
    imageicons.forEach(item => {
      item.style.height = "";
      item.style.width="";
    });  }
    }
    if(window.innerWidth<850 && window.innerWidth>425){
        q++;
        if(q%2!==0){
          document.getElementById("columns2").style.display = "none";
          document.getElementById("columns3").style.display="block";
          document.getElementById("prompt-history").style.display="none";
          document.getElementById("prompt-panel").style.display="none";
          document.getElementById("main-col-contain").style.gridTemplateColumns = ".3fr .7fr";
          const itemDetails = document.querySelectorAll(".item-detail"); // Selects all elements with class "item-detail"
          itemDetails.forEach(item => {
          item.style.display = "inline-block";
        });        
        const imageElement = document.getElementById("aion-logo"); 
        imageElement.src="images/Group 40.png";
        imageElement.style.height="100%";
        imageElement.style.width="40%";
        document.getElementById("og").style.display="none";        
        document.getElementById("columns3").style.display="block";
        document.getElementById("columns3").style.opacity="50%";
        document.getElementById("title-text-gen").style.display = "block";
        document.getElementById("version").style.display = "block";
        document.getElementById("profile-details").style.display = "inline-flex";
        document.getElementById("buttonui").style.display = "flex";
        document.getElementById("title-text2").style.width = "97%";
        document.getElementById("title-text2").style.justifyContent = "flex-start";
        document.getElementById("img-icon").style.height = "7vh";
        document.getElementById("img-icon").style.width = "auto";
        document.getElementById("img-icon").style.marginLeft = ".8rem";
        document.getElementById("title-text2").style.marginTop = "0.5rem";
        document.getElementById("title-text2").style.marginBottom = "0.5rem";
        document.getElementById("toggle-main").style.right = "1%";
        document.getElementById("profile-img").style.width="25%";
        document.getElementById("profile-img").style.height="60%";
        document.getElementById("profile-img").style.position="relative";
        document.getElementById("profile-img").style.bottom="0rem";
        document.getElementById("columns3").style.gridTemplateColumns = "1fr";
        document.getElementById("profile").style.backgroundColor="#434e8fb5";/////////
        document.getElementById("widthofprof").style.marginTop="0";
        document.getElementById("widthofprof").style.position="relative";
        document.getElementById("widthofprof").style.height="100%";
        const menuitemDetails = document.querySelectorAll(".menu-list-itemz"); // Selects all elements with class "item-detail"

        menuitemDetails.forEach(item => {
        item.style.display = "flex";
        item.style.marginBottom="0rem";
        item.style.justifyContent = "center";
      });
      const imageicons = document.querySelectorAll(".image2"); // Selects all elements with class "item-detail"

      imageicons.forEach(item => {
      item.style.height = "2rem";
      item.style.width="2rem";
        });
        }
        else{
          if(chatHistory%2 !=0 || promptLibrary%2 !=0){
            document.getElementById("main-col-contain").style.gridTemplateColumns = "0.1fr 0.9fr";
            document.getElementById("columns2").style.display="none";
            document.getElementById("prompt-history").style.display="none";
          }
          else{
            document.getElementById("main-col-contain").style.gridTemplateColumns = ".1fr 0.9fr";
          }
            // document.getElementById("columns2").style.display = "none";
              const itemDetails = document.querySelectorAll(".item-detail"); // Selects all elements with class "item-detail"
    
          itemDetails.forEach(item => {
          item.style.display = "";
        });
        document.getElementById("prompt-panel").style.opacity="100%";
        const imageElement = document.getElementById("aion-logo");
        imageElement.src="images/Group 40.png";
        imageElement.style.height="";
        imageElement.style.width="";
        document.getElementById("og").style.display="block";   
        document.getElementById("title-text-gen").style.display = "";
        document.getElementById("version").style.display = "";
        document.getElementById("columns3").style.opacity="100%";
        document.getElementById("profile-details").style.display = "";
        document.getElementById("buttonui").style.display = "";
        document.getElementById("title-text2").style.width = "";
        document.getElementById("title-text2").style.justifyContent = "";
        document.getElementById("img-icon").style.height = "";
        document.getElementById("img-icon").style.width = "";
        document.getElementById("img-icon").style.marginLeft = "";
        document.getElementById("title-text2").style.marginTop = "";
        document.getElementById("title-text2").style.marginBottom = "";
        document.getElementById("toggle-main").style.right = "";
        document.getElementById("profile-img").style.width="";
        document.getElementById("profile").style.backgroundColor="";
        document.getElementById("columns3").style.gridTemplateColumns = "";
        document.getElementById("widthofprof").style.marginTop="";
        document.getElementById("widthofprof").style.position="absolute";
        document.getElementById("widthofprof").style.height="100%";
        const menuitemDetails = document.querySelectorAll(".menu-list-itemz"); // Selects all elements with class "item-detail"
        menuitemDetails.forEach(item => {
        item.style.display = "";
        item.style.marginBottom="";
        item.style.justifyContent = "";
      });
      const imageicons = document.querySelectorAll(".image2"); // Selects all elements with class "item-detail"
      imageicons.forEach(item => {
      item.style.height = "";
      item.style.width="";
    });
    document.getElementById("coulmn1-last-div").style.backgroundImage="none";
        }
      }
      if(window.innerWidth<=425){
        r++;
        if(r%2!==0){
          document.getElementById("columns2").style.display = "none";
          document.getElementById("columns1").style.display="block";
          document.getElementById("columns1").style.width="60vw";
          document.getElementById("columns1").style.height="100dvh";
          document.getElementById("columns1").style.overflow="hidden";
          document.getElementById("main-col-contain").style.gridTemplateColumns = ".6fr .4fr";
          const itemDetails = document.querySelectorAll(".item-detail"); // Selects all elements with class "item-detail"
          itemDetails.forEach(item => {
          item.style.display = "inline-block";
        });        
        const imageElement = document.getElementById("aion-logo"); 
        imageElement.style.display="none";
        document.getElementById("og").style.display="none";       
        document.getElementById("columns3").style.display="block";
        document.getElementById("columns3").style.opacity="50%";
        document.getElementById("title-text-gen").style.display = "block";
        document.getElementById("version").style.display = "block";
        document.getElementById("profile-details").style.display = "inline-flex";
        document.getElementById("buttonui").style.display = "flex";
        document.getElementById("title-text2").style.width = "97%";
        document.getElementById("title-text2").style.justifyContent = "flex-start";
        document.getElementById("img-icon").style.height = "7vh";
        document.getElementById("img-icon").style.width = "auto";
        document.getElementById("img-icon").style.marginLeft = ".8rem";
        document.getElementById("title-text2").style.marginTop = "0.5rem";
        document.getElementById("title-text2").style.marginBottom = "1rem";
        document.getElementById("toggle-main").style.right = "1%";
        document.getElementById("profile-img").style.width="25%";
        document.getElementById("columns3").style.gridTemplateColumns = "1fr";
        document.getElementById("profile").style.backgroundColor="#434e8fb5";/////////
        document.getElementById("widthofprof").style.marginTop="0";
        document.getElementById("widthofprof").style.position="relative";
        document.getElementById("widthofprof").style.height="100%";
        const menuitemDetails = document.querySelectorAll(".menu-list-itemz"); // Selects all elements with class "item-detail"

        menuitemDetails.forEach(item => {
        item.style.display = "flex";
        item.style.marginBottom="0rem";
        item.style.justifyContent = "center";
      });
      const imageicons = document.querySelectorAll(".image2"); // Selects all elements with class "item-detail"

      imageicons.forEach(item => {
      item.style.height = "2rem";
      item.style.width="2rem";
        });
        }
        else{
            document.getElementById("columns2").style.display = "none";
            document.getElementById("columns1").style.display="none";
            document.getElementById("main-col-contain").style.gridTemplateColumns = "1fr"; 
          const imageElement = document.getElementById("aion-logo"); 
          imageElement.style.display="none";
          document.getElementById("og").style.display="block";        
          document.getElementById("columns3").style.display="block";
          document.getElementById("columns3").style.opacity="100%";
          document.getElementById("img-icon").style.width = "auto";
          document.getElementById("img-icon").style.marginLeft = ".8rem";
          document.getElementById("title-text2").style.marginTop = "1.5rem";
          document.getElementById("title-text2").style.marginBottom = "3rem";
          document.getElementById("toggle-main").style.right = "1%";
          document.getElementById("profile-img").style.width="25%";
          document.getElementById("columns3").style.gridTemplateColumns = "1fr";
          document.getElementById("profile").style.backgroundColor="#434e8fb5";/////////
          document.getElementById("widthofprof").style.marginTop="0";
          const menuitemDetails = document.querySelectorAll(".menu-list-itemz"); // Selects all elements with class "item-detail"
  
          menuitemDetails.forEach(item => {
          item.style.display = "flex";
          item.style.marginBottom="0rem";
          item.style.justifyContent = "center";
        });
        const imageicons = document.querySelectorAll(".image2"); // Selects all elements with class "item-detail"
  
        imageicons.forEach(item => {
        item.style.height = "2rem";
        item.style.width="2rem";
          });
        }
    }  
}
function openHistory(){
   if(window.innerWidth>=810){
    if(i%2==0){
      changeDimension();
    }
    document.getElementById("prompt-panel").style.display="none";
    document.getElementById("main-col-contain").style.gridTemplateColumns=".15fr .18fr .67fr";
    document.getElementById("columns2").style.display="block";
    document.getElementById("columns3").style.display="block";
   }
   if(window.innerWidth<850 && window.innerWidth>425 && q%2==0){
    changeDimension();
  }
   if( (q%2==0 || q%2!=0) && window.innerWidth<850 && window.innerWidth>425){
    document.getElementById("columns2").style.display = "block";
    document.getElementById("columns3").style.display="block";
    document.getElementById("prompt-history").style.display="none";
    document.getElementById("prompt-panel").style.display="none";
    document.getElementById("main-col-contain").style.gridTemplateColumns = ".3fr .35fr .35fr";
   }
    chatHistory++;
}
function closeHistory(){
    chatHistory++;
    if(window.innerWidth>=810){
    document.getElementById("main-col-contain").style.gridTemplateColumns=".15fr .85fr";
    document.getElementById("columns2").style.display="none";
    }
    if(window.innerWidth<810 && window.innerWidth>425 && (q%2!=0)){
      document.getElementById("columns2").style.display="none";
      document.getElementById("main-col-contain").style.gridTemplateColumns="0.3fr .7fr";
      document.getElementById("columns3").style.opacity="50%";
      document.getElementById("prompt-panel").style.opacity="50%";
    }
    if(window.innerWidth<810 && window.innerWidth>425 && (q%2==0)){
      document.getElementById("main-col-contain").style.gridTemplateColumns="0.1fr .9fr";
      document.getElementById("columns3").style.opacity="100%";
      document.getElementById("prompt-panel").style.opacity="100%";
    }
}
function openPromptHistory(){
  if(window.innerWidth>=810){
    if(i%2==0){
      changeDimension();
    }
    document.getElementById("columns3").style.display="none";
    document.getElementById("columns2").style.display="none";
    document.getElementById("prompt-history").style.display="block";
    document.getElementById("prompt-panel").style.display="block";
    document.getElementById("main-col-contain").style.gridTemplateColumns="0.15fr 0.18fr 0.67fr";
  }
  if(window.innerWidth<850 && window.innerWidth>425){
    if(q%2==0){
      changeDimension();
    }
  }
  if( (q%2==0 || q%2!=0) && window.innerWidth<850 && window.innerWidth>425){
    document.getElementById("columns2").style.display = "none";
    document.getElementById("columns3").style.display="none";
    document.getElementById("prompt-history").style.display="block";
    document.getElementById("prompt-panel").style.display="block";
    document.getElementById("prompt-panel").style.opacity="50%";
    document.getElementById("main-col-contain").style.gridTemplateColumns = ".3fr .35fr .35fr";
   }
  promptLibrary++;
}
function closePromptHistory(){
    document.getElementById("prompt-history").style.display="none";
    if(i%2!=0){
      document.getElementById("main-col-contain").style.gridTemplateColumns="0.15fr 0.85fr";
    }
    if(i%2==0){
      document.getElementById("main-col-contain").style.gridTemplateColumns="0.05fr 0.95fr";
    }
    if(window.innerWidth<810 && window.innerWidth>425 && (q%2!=0)){
      document.getElementById("columns2").style.display="none";
      document.getElementById("columns3").style.display="none";
      document.getElementById("main-col-contain").style.gridTemplateColumns="0.3fr .7fr";
      document.getElementById("columns3").style.opacity="50%";
      document.getElementById("prompt-panel").style.opacity="50%";
    }
    if(window.innerWidth<810 && window.innerWidth>425 && q%2==0){
      document.getElementById("main-col-contain").style.gridTemplateColumns="0.1fr .9fr";
      document.getElementById("columns3").style.display="none";
      document.getElementById("columns3").style.opacity="100%";
  
      document.getElementById("prompt-panel").style.opacity="100%";
      }
    promptLibrary++;
}