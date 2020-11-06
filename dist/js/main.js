const homeBtn = document.querySelector(".home")
const creationBtn = document.querySelector(".creation")
const aboutBtn = document.querySelector(".about")
const contactBtn = document.querySelector(".contact")
const homeTxt = document.querySelector(".homeTxt")
const comingTxt = document.querySelector(".comingTxt")
const allBtns = document.querySelector(".buttonss")
const titleTxt = document.querySelector(".titleTxt")
const aboutCont = document.querySelector(".aboutCont")
const contactCont = document.querySelector (".contactCont")
const buttonss = document.querySelector(".buttonss")
const createCont = document.querySelector(".createCont")
const modalCont = document.querySelector(".modalCont")


allBtns.addEventListener("click", () => {
    const isButton = event.target.nodeName === 'BUTTON' || 'TEXT';
    let checkBtn = event.target
    let actualCheckBtn = checkBtn.innerText

    if (isButton === true || 'TEXT') {
        if (actualCheckBtn == "Home" ) {
            if (homeTxt.innerText === "Home") { 

            }

            else if (homeTxt.innerText !== "Home") {
                showHome()
            }

        } else if (actualCheckBtn == "Creations") {
            if (homeTxt.innerText === "Creations") { 

            }  else if (homeTxt.innerText !== "Creations") {
                    showCreate()
                   
            }
        } else if (actualCheckBtn == "About") {
            if (homeTxt.innerText === "About") { 

            }  else if (homeTxt.innerText !== "About") {
                showAbout()
               
            }
        } else if (actualCheckBtn == "Contact") {
            if (homeTxt.innerText === "Contact") { 

            }  else if (homeTxt.innerText !== "Contact") {
                showContact()
                
            }
        } 
    
    } 
       
})

function showHome() {
    buttonss.classList.add("disableBtn")
    homeTxt.style.animationName = "tesAnimEnd"
    
    checkCreateCont()
    checkAbtCont()
    checkContactCont()
    
    setTimeout(()=> {
        buttonss.classList.remove("disableBtn")
    }, 1500)
    homeTxt.addEventListener("animationend", () => {
    
    homeTxt.style.opacity = "0"
    homeTxt.innerText = "Home"
    homeTxt.style.animationName = "tesAnim"
    buttonss.classList.remove("moveCreaPhoto")
    buttonss.classList.remove("moveCreaVideo")
    titleTxt.classList.remove("moveCreaTitle", "moveAbtTitle", "moveContTitle")
    allBtns.classList.remove("moveCreaBtn", "moveAbtBtn", "moveContBtn")
    setTimeout(()=> {
        homeTxt.style.opacity = "1"
    }, 100)
})
}

function showCreate() {
    buttonss.classList.add("disableBtn")
    showCreaCont()
    homeTxt.style.animationName = "tesAnimEnd"
    checkAbtCont()
    checkContactCont()
    
    setTimeout(()=> {
        buttonss.classList.remove("disableBtn")
    }, 1000)
    homeTxt.addEventListener("animationend", () => {
    createCont.style.display = "flex"
    homeTxt.style.opacity = "0"
    homeTxt.innerText = "Creations"
    homeTxt.style.animationName = "tesAnim"
    titleTxt.classList.remove("moveAbtTitle", "moveContTitle")
    allBtns.classList.remove("moveAbtBtn", "moveContBtn")
    titleTxt.classList.add("moveCreaTitle");
    allBtns.classList.add("moveCreaBtn")
    setTimeout(()=> {
        homeTxt.style.opacity = "1"
    }, 100)
})
}

function showCreaCont() {
//  Photo
    let photoCont = document.createElement("div")
    photoCont.classList.add("photoCont")
    
    let borderImg = document.createElement("div")
    borderImg.classList.add("borderImg")
    photoCont.appendChild(borderImg)

    let overlayPh = document.createElement("div")
    overlayPh.classList.add("overlayPh")
    let photoContTxt = document.createElement("h2")
    photoContTxt.innerText = "photos"
    photoContTxt.classList.add("photoContTxt")
    overlayPh.appendChild(photoContTxt)
    photoCont.appendChild(overlayPh)

    let photoBg = document.createElement("img")
    photoBg.classList.add("photoBg")
    photoBg.src = "imgs/photobg.jpg"
    photoBg.alt = "Frank Ocean Boys Don't Cry Cover"
    photoCont.appendChild(photoBg)

    createCont.appendChild(photoCont)

//  Video

    let videoCont = document.createElement("div")
    videoCont.classList.add("videoCont")

    let borderVd = document.createElement("div")
    borderVd.classList.add("borderVd")
    videoCont.appendChild(borderVd)

    let overlayVd = document.createElement("div")
    overlayVd.classList.add("overlayVd")
    let videoContTxt = document.createElement("h2")
    videoContTxt.innerText = "videos"
    videoContTxt.classList.add("videoContTxt")
    overlayVd.appendChild(videoContTxt)
    videoCont.appendChild(overlayVd)

    let videoBg = document.createElement("img")
    videoBg.classList.add("videoBg")
    videoBg.src = "imgs/videosbg.jpg"
    videoBg.alt = "Frank Ocean Boys Don't Cry Cover"
    videoCont.appendChild(videoBg)

//

setTimeout (()=> {
    photoCont.addEventListener("mouseover", ()=> {
    photoCont.style.cursor = "pointer"
    overlayPh.style.opacity = "0"
    overlayPh.style.animationName = "showOverlay"
    overlayPh.style.display = "flex"
})


photoCont.addEventListener("mouseout", ()=> {
    overlayPh.style.opacity = "1"
    overlayPh.style.animationName = "hideOverlay"
    overlayPh.style.display = "flex"
    setTimeout(() => {
        overlayPh.style.display = "none"
    }, 360);
})

videoCont.addEventListener("mouseover", ()=> {
    videoCont.style.cursor = "pointer"
    overlayVd.style.opacity = "0"
    overlayVd.style.animationName = "showOverlay"
    overlayVd.style.display = "flex"
})


videoCont.addEventListener("mouseout", ()=> {
    overlayVd.style.opacity = "1"
    overlayVd.style.animationName = "hideOverlay"
    overlayVd.style.display = "flex"
    setTimeout(() => {
        overlayVd.style.display = "none"
    }, 360);
})

setTimeout (()=> {
    photoCont.addEventListener("click", ()=> {
    photoCont.style.pointerEvents = "none"
   
    checkCreateCont()

    buttonss.classList.remove("moveCreaBtn")
    buttonss.style.transition = "all 2.5s ease"
    buttonss.classList.add("moveCreaPhoto")

    photoCont.addEventListener("animationend", () => {
        photoCont.style.display = "none";
        photoCont.remove();
        videoCont.style.display = "none";
        videoCont.remove();
        createCont.style.display = "flex";
        createCont.style.width = "1300px"
        setTimeout(()=>{showcasePhotos()},200)
        
    })
})}, 200)

}, 1200)

    

    function showcasePhotos() {
      
        let photosShowCase = document.createElement("div")
        photosShowCase.classList.add("photosShowCase")
        let leftPhotoCont = document.createElement("div")
        leftPhotoCont.classList.add("leftPhotoCont")

        // 1st

        let imageFirstCont = document.createElement("div")
        imageFirstCont.classList.add("imageFirstCont")
        let imageFirstDesc = document.createElement("p")
        imageFirstDesc.classList.add("imageFirstDesc")
        imageFirstDesc.textContent = "U-N-I-T-Y_1"
        

        let imageFirst = document.createElement("img")
        imageFirst.src = "photoshow/blond1.png"
        imageFirst.classList.add("imageFirst")

        imageFirstCont.appendChild(imageFirstDesc)
        imageFirstCont.appendChild(imageFirst)

       
        leftPhotoCont.appendChild(imageFirstCont)
        
        // 2nd

        let imageSecondCont = document.createElement("div")
        imageSecondCont.classList.add("imageSecondCont")
        let imageSecondDesc = document.createElement("p")
        imageSecondDesc.classList.add("imageFirstDesc")
        imageSecondDesc.textContent = "U-N-I-T-Y_2"
        

        let imageSecond = document.createElement("img")
        imageSecond.src = "photoshow/blond2.png"
        imageSecond.classList.add("imageFirst")

        imageSecondCont.appendChild(imageSecondDesc)
        imageSecondCont.appendChild(imageSecond)

        leftPhotoCont.appendChild(imageSecondCont)
        
        // 3rd

        let imageThirdCont = document.createElement("div")
        imageThirdCont.classList.add("imageSecondCont")
        let imageThirdDesc = document.createElement("p")
        imageThirdDesc.classList.add("imageFirstDesc")
        imageThirdDesc.textContent = "U-N-I-T-Y_3"
        

        let imageThird = document.createElement("img")
        imageThird.src = "photoshow/blond3.png"
        imageThird.classList.add("imageFirst")

        imageThirdCont.appendChild(imageThirdDesc)
        imageThirdCont.appendChild(imageThird)

        leftPhotoCont.appendChild(imageThirdCont)

        // 4th

        let imageFourthCont = document.createElement("div")
        imageFourthCont.classList.add("imageSecondCont")
        let imageFourthDesc = document.createElement("p")
        imageFourthDesc.classList.add("imageFirstDesc")
        imageFourthDesc.textContent = "U-N-I-T-Y_4"
        

        let imageFourth = document.createElement("img")
        imageFourth.src = "photoshow/blond4.png"
        imageFourth.classList.add("imageFirst")

        imageFourthCont.appendChild(imageFourthDesc)
        imageFourthCont.appendChild(imageFourth)

        leftPhotoCont.appendChild(imageFourthCont)

        //5th

        let imageFifthCont = document.createElement("div")
        imageFifthCont.classList.add("imageSecondCont")
        let imageFifthDesc = document.createElement("p")
        imageFifthDesc.classList.add("imageFirstDesc")
        imageFifthDesc.textContent = "U-N-I-T-Y_5"
        

        let imageFifth = document.createElement("img")
        imageFifth.src = "photoshow/blond5.png"
        imageFifth.classList.add("imageFirst")

        imageFifthCont.appendChild(imageFifthDesc)
        imageFifthCont.appendChild(imageFifth)

        leftPhotoCont.appendChild(imageFifthCont)

        //6th
        let imageSixthCont = document.createElement("div")
        imageSixthCont.classList.add("imageSecondCont")
        let imageSixthDesc = document.createElement("p")
        imageSixthDesc.classList.add("imageFirstDesc")
        imageSixthDesc.textContent = "IU Poster"
        

        let imageSixth = document.createElement("img")
        imageSixth.src = "photoshow/iuiu.png"
        imageSixth.classList.add("imagesFirst")

        imageSixthCont.appendChild(imageSixthDesc)
        imageSixthCont.appendChild(imageSixth)

        leftPhotoCont.appendChild(imageSixthCont)

        // end of unity

        let rightPhotoCont = document.createElement("div")
        rightPhotoCont.classList.add("rightPhotoCont")

        // 1st alt
        
        let imageAltFirstCont = document.createElement("div")
        imageAltFirstCont.classList.add("imageAltFirstCont")
        let imageAltFirstDesc = document.createElement("p")
        imageAltFirstDesc.classList.add("imageAltFirstDesc")
        imageAltFirstDesc.textContent = "feelings you provide_1"
        

        let imageAltFirst = document.createElement("img")
        imageAltFirst.src = "photoshow/blondalt1.png"
        imageAltFirst.classList.add("imageAltFirst")

        imageAltFirstCont.appendChild(imageAltFirstDesc)
        imageAltFirstCont.appendChild(imageAltFirst)

       
        rightPhotoCont.appendChild(imageAltFirstCont)

        // 2nd alt

        let imageAltSecondCont = document.createElement("div")
        imageAltSecondCont.classList.add("imageAltSecondCont")
        let imageAltSecondDesc = document.createElement("p")
        imageAltSecondDesc.classList.add("imageAltFirstDesc")
        imageAltSecondDesc.textContent = "One-man Cult_2"
        

        let imageAltSecond = document.createElement("img")
        imageAltSecond.src = "photoshow/blondalt2.png"
        imageAltSecond.classList.add("imageAltFirst")

        imageAltSecondCont.appendChild(imageAltSecondDesc)
        imageAltSecondCont.appendChild(imageAltSecond)

       
        rightPhotoCont.appendChild(imageAltSecondCont)

        // 3rd alt

        let imageAltThirdCont = document.createElement("div")
        imageAltThirdCont.classList.add("imageAltSecondCont")
        let imageAltThirdDesc = document.createElement("p")
        imageAltThirdDesc.classList.add("imageAltFirstDesc")
        imageAltThirdDesc.textContent = "Comme des Garçons_3"
        

        let imageAltThird = document.createElement("img")
        imageAltThird.src = "photoshow/blondalt3.png"
        imageAltThird.classList.add("imageAltFirst")

        imageAltThirdCont.appendChild(imageAltThirdDesc)
        imageAltThirdCont.appendChild(imageAltThird)

       
        rightPhotoCont.appendChild(imageAltThirdCont)

        // 4th alt

        let imageAltFourthCont = document.createElement("div")
        imageAltFourthCont.classList.add("imageAltSecondCont")
        let imageAltFourthDesc = document.createElement("p")
        imageAltFourthDesc.classList.add("imageAltFirstDesc")
        imageAltFourthDesc.textContent = "Life goes on_4"
        

        let imageAltFourth = document.createElement("img")
        imageAltFourth.src = "photoshow/blondalt4.png"
        imageAltFourth.classList.add("imageAltFirst")

        imageAltFourthCont.appendChild(imageAltFourthDesc)
        imageAltFourthCont.appendChild(imageAltFourth)

       
        rightPhotoCont.appendChild(imageAltFourthCont)

        // 5th alt

        let imageAltFifthCont = document.createElement("div")
        imageAltFifthCont.classList.add("imageAltSecondCont")
        let imageAltFifthDesc = document.createElement("p")
        imageAltFifthDesc.classList.add("imageAltFirstDesc")
        imageAltFifthDesc.textContent = "I got two versions_5"
        

        let imageAltFifth = document.createElement("img")
        imageAltFifth.src = "photoshow/blondalt5.png"
        imageAltFifth.classList.add("imageAltFirst")

        imageAltFifthCont.appendChild(imageAltFifthDesc)
        imageAltFifthCont.appendChild(imageAltFifth)

       
        rightPhotoCont.appendChild(imageAltFifthCont)

        // sixth

        let imageAltSixthCont = document.createElement("div")
        imageAltSixthCont.classList.add("imageAltSecondCont")
        let imageAltSixthDesc = document.createElement("p")
        imageAltSixthDesc.classList.add("imageAltFirstDesc")
        imageAltSixthDesc.textContent = "Midnights in Tokyo"
        

        let imageAltSixth = document.createElement("img")
        imageAltSixth.src = "photoshow/asg.png"
        imageAltSixth.classList.add("imageAltFirst")

        imageAltSixthCont.appendChild(imageAltSixthDesc)
        imageAltSixthCont.appendChild(imageAltSixth)

       
        rightPhotoCont.appendChild(imageAltSixthCont)

        // end of alt

        //----

        let middlePhotoCont = document.createElement("div")
        middlePhotoCont.classList.add("middlePhotoCont")

        let imageSeventhCont = document.createElement("div")
        imageSeventhCont.classList.add("imageThirdCont")
        let imageSeventhDesc = document.createElement("p")
        imageSeventhDesc.classList.add("imageFirstDesc")
        imageSeventhDesc.textContent = "Tears"
        

        let imageSeventh = document.createElement("img")
        imageSeventh.src = "photoshow/tears.png"
        imageSeventh.classList.add("imageSeventh")

        imageSeventhCont.appendChild(imageSeventhDesc)
        imageSeventhCont.appendChild(imageSeventh)

       
        middlePhotoCont.appendChild(imageSeventhCont)
        
        // 2nd

        let imageEighthCont = document.createElement("div")
        imageEighthCont.classList.add("imageThirdCont")
        let imageEighthDesc = document.createElement("p")
        imageEighthDesc.classList.add("imageFirstDesc")
        imageEighthDesc.textContent = "Never Better"
        

        let imageEighth = document.createElement("img")
        imageEighth.src = "photoshow/neverbetter.png"
        imageEighth.classList.add("imageSeventh")

        imageEighthCont.appendChild(imageEighthDesc)
        imageEighthCont.appendChild(imageEighth)

       
        middlePhotoCont.appendChild(imageEighthCont)

        // 3rd
        let imageNinthCont = document.createElement("div")
        imageNinthCont.classList.add("imageThirdCont")
        let imageNinthDesc = document.createElement("p")
        imageNinthDesc.classList.add("imageFirstDesc")
        imageNinthDesc.textContent = "Contact"
        

        let imageNinth = document.createElement("img")
        imageNinth.src = "photoshow/eye.png"
        imageNinth.classList.add("imageSeventh")

        imageNinthCont.appendChild(imageNinthDesc)
        imageNinthCont.appendChild(imageNinth)

       
        middlePhotoCont.appendChild(imageNinthCont)

        
        //4th

        let imageTenthCont = document.createElement("div")
        imageTenthCont.classList.add("imageThirdCont")
        let imageTenthDesc = document.createElement("p")
        imageTenthDesc.classList.add("imageFirstDesc")
        imageTenthDesc.textContent = "Fake News Infographic"
        
        let imageTenth = document.createElement("img")
        imageTenth.src = "photoshow/news.png"
        imageTenth.classList.add("imageEight")

        imageTenthCont.appendChild(imageTenthDesc)
        imageTenthCont.appendChild(imageTenth)

       
        rightPhotoCont.appendChild(imageTenthCont)
        // 5th

        let imageEleventhCont = document.createElement("div")
        imageEleventhCont.classList.add("imageThirdCont")
        let imageEleventhDesc = document.createElement("p")
        imageEleventhDesc.classList.add("imageFirstDesc")
        imageEleventhDesc.textContent = "COVID Prevention Poster"
        
        let imageEleventh = document.createElement("img")
        imageEleventh.src = "photoshow/covprev.png"
        imageEleventh.classList.add("imageEight")

        imageEleventhCont.appendChild(imageEleventhDesc)
        imageEleventhCont.appendChild(imageEleventh)

       
        leftPhotoCont.appendChild(imageEleventhCont)

        //


        photosShowCase.appendChild(leftPhotoCont)
        photosShowCase.appendChild(rightPhotoCont)
        photosShowCase.appendChild(middlePhotoCont)

        createCont.appendChild(photosShowCase)
        leftPhotoCont.style.display = "flex"
        leftPhotoCont.style.opacity = "0"
        leftPhotoCont.style.animationName = "leftPhotoContIn"
        leftPhotoCont.addEventListener("animationend", ()=> {
            leftPhotoCont.style.opacity = "1"
        })

        rightPhotoCont.style.display = "flex"
        rightPhotoCont.style.opacity = "0"
        rightPhotoCont.style.animationName = "rightPhotoContIn"
        rightPhotoCont.addEventListener("animationend", ()=> {
            rightPhotoCont.style.opacity = "1"
        })

        middlePhotoCont.style.display = "flex"
        middlePhotoCont.style.opacity = "0"
        middlePhotoCont.style.animationName = "midPhotoContIn"
        middlePhotoCont.addEventListener("animationend", ()=> {
            middlePhotoCont.style.opacity = "1"
        })

        let something = document.getElementsByTagName("IMG")
       
        

        for(i = 0; i < something.length; i ++) {
            something[i].addEventListener("click", ()=> {
                photoModal(event)
            })
        }

        function photoModal(event) {
            let overlayCont = document.createElement("div")
            overlayCont.classList.add("overlayCont")

            let imgName = event.target.classList
            let imgSrc = event.target.src
            
            let imgModal = document.createElement("img")
            imgModal.src = imgSrc
            
            let xButton = document.createElement("button")
            xButton.textContent = "x"
            overlayCont.appendChild(xButton)
            
            if (imgName == "imageFirst" || imgName == "imagesFirst" ||imgName == "imageAltFirst") {
                imgModal.classList.add("popupImgFirst")
                overlayCont.appendChild(imgModal)

                xButton.classList.add("xButtonFirst")

                modalCont.appendChild(overlayCont)
                modalCont.classList.add("active")
    
                xButton.addEventListener("click", ()=> {
                    modalCont.classList.remove("active")
                    modalCont.addEventListener("transitionend", ()=> {
                        setTimeout(()=> {
                            overlayCont.remove()
                            imgModal.remove()
                            xButton.remove()}, 400)
                    })
                })
            } else if (imgName == "imageSeventh") {
                imgModal.classList.add("popupImgSeventh")
                overlayCont.appendChild(imgModal)

                xButton.classList.add("xButtonSeventh")

                modalCont.appendChild(overlayCont)
                modalCont.classList.add("active")
    
                xButton.addEventListener("click", ()=> {
                    modalCont.classList.remove("active")
                    modalCont.addEventListener("transitionend", ()=> {
                        setTimeout(()=> {
                            overlayCont.remove()
                            imgModal.remove()
                            xButton.remove()}, 400)
                       
                    })
                })
            } else {
               
            }
           
           
        }
        

    }

    setTimeout (()=> {
        videoCont.addEventListener("click", ()=> {
            videoCont.style.pointerEvents = "none"
       
        checkCreateCont()
    
        buttonss.classList.remove("moveCreaBtn")
        buttonss.style.transition = "all 2.5s ease"
        buttonss.classList.add("moveCreaVideo")
    
        videoCont.addEventListener("animationend", () => {
            photoCont.style.display = "none";
            photoCont.remove();
            videoCont.style.display = "none";
            videoCont.remove();
            createCont.style.display = "flex";
            createCont.style.width = "1300px"
            setTimeout(()=>{showcaseVideos()},200)
            
        })
    })}, 1500)

    function showcaseVideos() {
        let videosShowcase = document.createElement("div")
        videosShowcase.classList.add("videosShowcase")

        let videoAllCont = document.createElement("div")
        videoAllCont.classList.add("videoAllCont")

        let aVideoCont = document.createElement("div")
        aVideoCont.classList.add("aVideoCont")

        let videoDesc = document.createElement("p")
        videoDesc.classList.add("videoDesc")
        videoDesc.textContent = "U-N-I-T-Y"
        aVideoCont.appendChild(videoDesc)

        let theVideo = document.createElement("video")
        theVideo.width = "550"
        theVideo.height = "688"
        theVideo.controls = true

        let vidSrc = document.createElement("source")
        vidSrc.src = "videoshow/unity.mp4"
        vidSrc.type = "video/mp4"
        theVideo.appendChild(vidSrc)

        aVideoCont.appendChild(theVideo)
        videoAllCont.appendChild(aVideoCont)

        //
        let iuVideoCont = document.createElement("div")
        iuVideoCont.classList.add("aVideoCont")

        let videoDesciu = document.createElement("p")
        videoDesciu.classList.add("videoDesc")
        videoDesciu.textContent = "IU"
        iuVideoCont.appendChild(videoDesciu)

        let theVideoiu = document.createElement("video")
        theVideoiu.width = "550"
        theVideoiu.height = "688"
        theVideoiu.controls = true

        let vidSrciu = document.createElement("source")
        vidSrciu.src = "videoshow/iulast.mp4"
        vidSrciu.type = "video/mp4"
        theVideoiu.appendChild(vidSrciu)

        iuVideoCont.appendChild(theVideoiu)
        videoAllCont.appendChild(iuVideoCont)
        

//

        let bVideoCont = document.createElement("div")
        bVideoCont.classList.add("aVideoCont")

        let videoDescB = document.createElement("p")
        videoDescB.classList.add("videoDesc")
        videoDescB.textContent = "Never Better"
        bVideoCont.appendChild(videoDescB)

        let theVideoB = document.createElement("video")
        theVideoB.width = "1000"
        theVideoB.height = "563"
        theVideoB.controls = true

        let vidSrcB = document.createElement("source")
        vidSrcB.src = "videoshow/neverbetter.mp4"
        vidSrcB.type = "video/mp4"
        theVideoB.appendChild(vidSrcB)

        bVideoCont.appendChild(theVideoB)
        videoAllCont.appendChild(bVideoCont)

//

        let cVideoCont = document.createElement("div")
        cVideoCont.classList.add("aVideoCont")

        let videoDescC = document.createElement("p")
        videoDescC.classList.add("videoDesc")
        videoDescC.textContent = "Contact"
        cVideoCont.appendChild(videoDescC)

        let theVideoC = document.createElement("video")
        theVideoC.width = "1000"
        theVideoC.height = "563"
        theVideoC.controls = true

        let vidSrcC = document.createElement("source")
        vidSrcC.src = "videoshow/eye.mp4"
        vidSrcC.type = "video/mp4"
        theVideoC.appendChild(vidSrcC)

        cVideoCont.appendChild(theVideoC)
        videoAllCont.appendChild(cVideoCont)

//

        let DVideoCont = document.createElement("div")
        DVideoCont.classList.add("aVideoCont")

        let videoDescD = document.createElement("p")
        videoDescD.classList.add("videoDesc")
        videoDescD.textContent = "Doggo City Pop"
        DVideoCont.appendChild(videoDescD)

        let theVideoD = document.createElement("video")
        theVideoD.width = "1000"
        theVideoD.height = "563"
        theVideoD.controls = true

        let vidSrcD = document.createElement("source")
        vidSrcD.src = "videoshow/doggowave.mp4"
        vidSrcD.type = "video/mp4"
        theVideoD.appendChild(vidSrcD)

        DVideoCont.appendChild(theVideoD)
        videoAllCont.appendChild(DVideoCont)

//

        let EVideoCont = document.createElement("div")
        EVideoCont.classList.add("aVideoCont")

        let videoDescE = document.createElement("p")
        videoDescE.classList.add("videoDesc")
        videoDescE.textContent = "Philippines Nine-Nine"
        EVideoCont.appendChild(videoDescE)

        let theVideoE = document.createElement("video")
        theVideoE.width = "1000"
        theVideoE.height = "563"
        theVideoE.controls = true

        let vidSrcE = document.createElement("source")
        vidSrcE.src = "videoshow/philnine.mp4"
        vidSrcE.type = "video/mp4"
        theVideoE.appendChild(vidSrcE)

        EVideoCont.appendChild(theVideoE)
        videoAllCont.appendChild(EVideoCont)

//

        let FVideoCont = document.createElement("div")
        FVideoCont.classList.add("aVideoContIframe")

        let videoDescF = document.createElement("p")
        videoDescF.classList.add("videoDesc")
        videoDescF.textContent = "Terorista"
        FVideoCont.appendChild(videoDescF)

        let theVideoF = document.createElement("iframe")
        theVideoF.width = "1000"
        theVideoF.height = "563"
        theVideoF.allowFullscreen = true
        theVideoF.src = "https://www.youtube.com/embed/Tvf1acpkDJ4"
        FVideoCont.appendChild(theVideoF)
        videoAllCont.appendChild(FVideoCont)

//

        videosShowcase.appendChild(videoAllCont)

        createCont.appendChild(videosShowcase)

        videoAllCont.style.display = "flex"
        videoAllCont.style.opacity = "0"
        videoAllCont.style.animationName = "showVids"
        videoAllCont.addEventListener("animationend", ()=> {
            videoAllCont.style.opacity = "1"
        })

        

    }

    createCont.appendChild(videoCont)

    createCont.style.opacity = "0"
 //   photoCont.style.opacity = "0"
  //  videoCont.style.opacity = "0"

    homeTxt.addEventListener("animationend", ()=> {

        photoCont.style.animationName = "moveCreaContIn"
        photoCont.style.display = "flex"
        videoCont.style.animationName = "moveCreaContIn"
        videoCont.style.display = "flex"


        setTimeout(()=> {
            createCont.style.opacity = "1"
        }, 350)
    })

    

}



function showAbout() {
    buttonss.classList.add("disableBtn")
    homeTxt.style.animationName = "tesAnimEnd"
    showDpText()
    checkCreateCont()
    checkContactCont()
    setTimeout(()=> {
        buttonss.classList.remove("disableBtn")
    }, 1000)
    
    homeTxt.addEventListener("animationend", () => {
        aboutCont.style.display = "flex"
        homeTxt.style.opacity = "0"
        homeTxt.innerText = "About"
        homeTxt.style.animationName = "tesAnim"
        buttonss.classList.remove("moveCreaPhoto")
        buttonss.classList.remove("moveCreaVideo")
        titleTxt.classList.remove("moveCreaTitle", "moveContTitle")
        allBtns.classList.remove("moveCreaBtn", "moveContBtn")
        titleTxt.classList.add("moveAbtTitle");
        allBtns.classList.add("moveAbtBtn")
        
        setTimeout(()=> {
            homeTxt.style.opacity = "1"
            
        }, 1000)
        
    })

}

function showDpText() {
    
    let aboutImg = document.createElement("div")
    aboutImg.classList.add("aboutImg")
    let aboutActualImg = document.createElement("img")
    aboutActualImg.style.opacity = "0"
    aboutActualImg.src = "imgs/DP2.png"
    aboutActualImg.classList.add("aboutActualImg")
    aboutImg.appendChild(aboutActualImg)
    aboutCont.appendChild(aboutImg)

    let aboutTxt = document.createElement("div")
    aboutTxt.classList.add("aboutTxt")
    let aboutActualTxt = document.createElement("p")
    aboutActualTxt.style.opacity = "0"
    aboutActualTxt.innerHTML = "<p>" + "Hey! It's Jayed, a persona created to give my works a sense of identity and, quite literally, a name. I have a diverse skill set when it comes to editing, ranging from simple infographics and brochures to more complex videos. I do both photos and videos. So, if you're looking for someone to make your thumbnails more engaging or a video editor for your YouTube channel, " + "<em>" + "Jayed is the guy" +"</em>"+ "." + "</p>"
    aboutActualTxt.classList.add("aboutActualTxt")
    aboutTxt.appendChild(aboutActualTxt)
    aboutCont.appendChild(aboutTxt)
    homeTxt.addEventListener("animationend", () => {
        aboutActualImg.style.animationName = "moveAboutImg"
        aboutActualImg.style.display = "flex"

        aboutActualTxt.style.animationName = "moveAboutImg"
        aboutActualTxt.style.display = "flex"
    })
    setTimeout(() => {
        aboutActualImg.style.opacity = "1"
    }, 1000)
}



function showContact() {
    buttonss.classList.add("disableBtn")
    checkCreateCont()
    checkAbtCont()
    showContactInfo()
    homeTxt.style.animationName = "tesAnimEnd"
    setTimeout(()=> {
        buttonss.classList.remove("disableBtn")
    }, 1000)
    
    homeTxt.addEventListener("animationend", () => {   
        contactCont.style.display = "flex" 
        homeTxt.style.opacity = "0"
        homeTxt.innerText = "Contact"
        homeTxt.style.animationName = "tesAnim"
        buttonss.classList.remove("moveCreaPhoto")
        buttonss.classList.remove("moveCreaVideo")
        titleTxt.classList.remove("moveCreaTitle", "moveAbtTitle")
        allBtns.classList.remove("moveCreaBtn", "moveAbtBtn")
        titleTxt.classList.add("moveContTitle");
        allBtns.classList.add("moveContBtn")
        setTimeout(()=> {
            homeTxt.style.opacity = "1"
        }, 100)
       
    })
}

function showContactInfo() {
    let contactTxt = document.createElement("div")
    contactTxt.classList.add("contactTxt")
    let pText = document.createElement("p")
    pText.innerText = "Feel free to connect with me through the listed social media below. For inquiries, you can send me an email."
    contactTxt.appendChild(pText)
    contactCont.appendChild(contactTxt)

    let contactSites = document.createElement("div")
    contactSites.classList.add("contactSites")

    let gmailCont = document.createElement("div")
    gmailCont.classList.add("gmailCont")
    gmailCont.style.display ="flex"
    let gmail = document.createElement("img")
    gmail.src = "imgs/gmail.png"
    gmail.alt = "gmail"
    gmail.classList.add("gmail")
    gmailCont.appendChild(gmail)

    let gmailInfo = document.createElement("p")
        gmailInfo.classList.add("gmailInfos")
        gmailInfo.style.display = "none"

    gmail.addEventListener("click", ()=> {
        
        

        if (gmailInfo.style.display === "none") {
            gmailCont.classList.add("moveGmail")
        
            
            gmailInfo.textContent = "jfrsonstamaria@gmail.com"
           
            gmailCont.addEventListener("transitionend", ()=> {
            gmailInfo.style.display = "flex"
            gmailInfo.style.animationName = "gmailTxt"
           })
            
           gmailCont.appendChild(gmailInfo)
        } else {
            gmailCont.classList.remove("moveGmail")
            
            gmailInfo.style.opacity = "0"
            gmailInfo.textContent = ""

            gmailCont.addEventListener("transitionend", ()=> {
                gmailInfo.style.display = "none"
                gmailInfo.style.animationName = ""
                
               })
        }
        
        
    })

    

    contactSites.appendChild(gmailCont)

    let instaCont = document.createElement("div")
    instaCont.style.display = "flex"
    instaCont.classList.add("instaCont")
    let insta = document.createElement("img")
    insta.src = "imgs/014-instagram.png"
    insta.alt = "instagram"
    insta.classList.add("instagram")

    insta.addEventListener("click", ()=> {
        window.open("https://www.instagram.com/jjjayed/")
    })
    
    instaCont.appendChild(insta)
    
    contactSites.appendChild(instaCont)

    let ytCont = document.createElement("div")
    ytCont.style.display = "flex"
    ytCont.classList.add("ytCont")
    let yt = document.createElement("img")
    yt.src = "imgs/018-youtube.png"
    yt.alt = "youtube"
    yt.classList.add("youtube")

    yt.addEventListener("click", ()=> {
        window.open("https://youtube.com/channel/UCLddjQ9RGySnhO_AoVsSNyg")
    })

    ytCont.appendChild(yt)
    
    contactSites.appendChild(ytCont)

    yt.addEventListener("click", ()=> {
        
      
        
    })


    contactCont.appendChild(contactSites)
    contactCont.style.opacity = "0"

    homeTxt.addEventListener("animationend", () => {
        contactTxt.style.animationName = "moveContIn"
        contactTxt.style.display = "flex"

        contactSites.style.animationName = "moveContIn"
        contactSites.style.display = "flex"
    })
    setTimeout(() => {
        contactCont.style.opacity = "1"
    }, 1000)
     
}

function checkAbtCont() {

    let checkAboutCont = aboutCont.hasChildNodes()
    /*
    let checkImgChild = aboutImg.hasChildNodes()
    let aboutActualImg = aboutImg.childNodes[0]
    let aboutActualTxt = aboutTxt.childNodes[0]
   */

    if (checkAboutCont === true) {
        
        let aboutImg = aboutCont.childNodes[0]
        let aboutActualImg = aboutImg.childNodes[0]
    
        let aboutTxt = aboutCont.childNodes[1]
        let aboutActualTxt = aboutTxt.childNodes[0]

        if (aboutActualImg.style.display == "flex") {
            aboutActualImg.style.animationName = "moveOutAboutImg"
            aboutActualTxt.style.opacity = "1"
            aboutActualTxt.style.animationName = "moveOutAboutImg"
            
        
            homeTxt.addEventListener("animationend", () => {
                aboutActualImg.style.display = "none"
                aboutImg.remove()
                aboutActualImg.remove()
                aboutTxt.remove()
                aboutActualTxt.remove()

                aboutCont.style.display = "none"
            })
        } else {
            
        }
    } else {
       
    }
    
}

function checkContactCont() {
    let checkContactCont = contactCont.hasChildNodes()
    
  

    if (checkContactCont === true) {
       
     
        let contactTxt = contactCont.childNodes[0]
        let contactSites = contactCont.childNodes[1]

        if (contactTxt.style.display == "flex") {
            
            contactTxt.style.animationName = "moveContOut"
            contactTxt.style.opacity = "1"
            contactSites.style.opacity = "1"
            contactSites.style.animationName = "moveContOut"
            
        
            homeTxt.addEventListener("animationend", () => {
                contactTxt.style.display = "none"
                contactTxt.remove()
                contactSites.style.display = "none"
                contactSites.remove()

                contactCont.style.display = "none"
            })
        } else {
            
        }
    } else {
       
    }
    
} 

function checkCreateCont() {
    let checkCreateConts = createCont.hasChildNodes()
    let photoCont = createCont.childNodes[0]
    let videoCont = createCont.childNodes[1]
    
    if (checkCreateConts === true) {

      if (createCont.childNodes[0].className == "photosShowCase")
      {   
        let photosShowCase =  createCont.childNodes[0]
        let leftPhotoCont = photosShowCase.childNodes[0]
        let rightPhotoCont = photosShowCase.childNodes[1]
        let middlePhotoCont = photosShowCase.childNodes[2]

        photosShowCase.style.opacity = "1"

        leftPhotoCont.style.opacity = "1"
        rightPhotoCont.style.opacity = "1"
        middlePhotoCont.style.opacity = "1"
        
        buttonss.style.transition = "all 2.5s ease"
         
        leftPhotoCont.style.animationName = "leftPhotoContOut"
        rightPhotoCont.style.animationName = "rightPhotoContOut"
        middlePhotoCont.style.animationName = "midPhotoContOut"
          

        homeTxt.addEventListener("animationend", ()=> {

            photosShowCase.style.opacity = "0"
            leftPhotoCont.style.opacity = "0"
            rightPhotoCont.style.opacity = "0"
            middlePhotoCont.style.opacity = "0"
    

            leftPhotoCont.style.display = "none"
            leftPhotoCont.remove()
            rightPhotoCont.style.display = "none"
            rightPhotoCont.remove()
            middlePhotoCont.style.display = "none"
            middlePhotoCont.remove()

            photosShowCase.style.opacity = "0"
            photosShowCase.style.display = "none"
            photosShowCase.remove()
            
            createCont.style.display = "none";

            buttonss.style.transition = "all 0.4s ease"

            
        })

      } else if (createCont.childNodes[0].className == "videosShowcase") {
            let videosShowcase = createCont.childNodes[0]
            let videoAllCont = videosShowcase.childNodes[0]

            buttonss.style.transition = "all 2.5s ease"

            videosShowcase.style.opacity = "1"
            videoAllCont.style.opacity = "1"

            videoAllCont.style.animationName = "hideVids"
            homeTxt.addEventListener("animationend", ()=> {
                videoAllCont.style.display = "none"
                videoAllCont.remove()
                videosShowcase.style.display = "none"
                videosShowcase.remove()

                createCont.style.display = "none";
            })
            

        }  else if (createCont.childNodes[0].className == "photoCont"){

        photoCont.style.opacity = "1"
        videoCont.style.opacity = "1"
        createCont.style.opacity = "1"
        photoCont.style.animationName = "moveCreaContOut"
        videoCont.style.animationName = "moveCreaContOut"

        homeTxt.addEventListener("animationend", ()=> {
            photoCont.style.display = "none";
            photoCont.remove();
            videoCont.style.display = "none";
            videoCont.remove();

            
            createCont.style.display = "none";

            buttonss.style.transition = "all 0.4s ease"
        })}


        
    } else {
        
    }


}





