var i = a= b= c= d=e= f=0;
var errors =0;
var temp1no =0;
var temp2no  =0;
var temp3no=0;
var temp4no=0;
var pieno=0;
var barno=0;
const transcriptDiv = document.getElementById("input-text-prompt").value;
const geminiResponseDiv = document.getElementById("output");
const sendToGeminiButton = document.getElementById("send-button");

document.getElementById("input-text-prompt").addEventListener("keyup", function(event) {
  if (event.key === "Enter") { // Check for Enter key (keyCode 13)
    mycomponent();
  }
});
function sendPrompt() {
const formData = new FormData();
formData.append('text', transcriptDiv);
mycomponent();
}

function mycomponent() {
        
        var temp1 = `
        <div class="crt-msg">
            <div class="align-crt">
                <div class="aion-icon-crt">
                    <img src="../images/Group 61.png" alt="#"/>
                </div>
                <div class="aion-result-generated" id="output" ><p id="msg${temp1no}"></p></div>
            </div>
            <div class="feedbackicons">
                <img src="../images/like.svg" alt="#" class="feed-back-icon">
                <img src="../images/dislike.svg" alt="#" class="feed-back-icon">
            </div>
            <div class="result-act-but">
                <div class="but-react">
                    <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> <p class="but-title">Save Question</p> 
                    </button>
                </div>
                <div class="but-react">
                    <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> <p class="but-title">Copy Question</p> 
                    </button>
                </div>
                <div class="but-react">
                    <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> <p class="but-title">Edit</p> 
                    </button>
                </div>
            </div>
        </div>
    `;
    var temp2 = `
<div class="crt-msg">
  <div class="align-crt">
    <div class="aion-icon-crt"><img src="../images/Group 61.png" alt="#"></div>
    <div  id="output">
      <div class="display-images-generated-flex">
        <img src="../images/car1.jpeg" loading="lazy" alt="" class="sizing-img" >
        <img src="../images/car2.jpeg" loading="lazy" alt="" class="sizing-img">
        <img src="../images/car3.jpeg" loading="lazy" alt="" class="sizing-img">
        <img src="../images/car4.jpeg" loading="lazy" alt="" class="sizing-img">
      </div>
      <div class="img-text-describe"><p id="msg2${temp2no}"></p></div>
    </div>
  </div>
  <div class="feedbackicons">
    <img src="../images/like.svg" alt="#" class="feed-back-icon">
    <img src="../images/dislike.svg" alt="#" class="feed-back-icon">
  </div>
  <div class="result-act-but">
    <div class="but-react">
      <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> <p class="but-title">Save Question</p> 
      </button>
    </div>
    <div class="but-react">
      <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> <p class="but-title">Copy Question</p> 
      </button>
    </div>
    <div class="but-react">
        <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> <p class="but-title">Edit</p> 
        </button>
      </div>
  </div>
</div>
`;
var  temp3 = `
<div class="crt-msg">
  <div class="align-crt">
    <div class="aion-icon-crt"><img src="../images/Group 61.png" alt="#"></div>
    <div class="aion-result-generated" id="output">
      <div class="card">
        <div class="card-img"><img src="../images/carimg.jpeg" alt="" class="alter-img"></div>
        <div class="card-title"><h2>Great View to Visit</h2></div>
        <div class="card-context"><p id="msg3${temp3no}"></p></div>
      </div>
    </div>
  </div>
  <div class="feedbackicons">
    <img src="../images/like.svg" alt="#" class="feed-back-icon">
    <img src="../images/dislike.svg" alt="#" class="feed-back-icon">
  </div>
  <div class="result-act-but">
    <div class="but-react">
      <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> <p class="but-title">Save Question</p> 
      </button>
    </div>
    <div class="but-react">
      <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> <p class="but-title">Copy Question</p> 
      </button>
    </div>
    <div class="but-react">
        <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> <p class="but-title">Edit</p> 
        </button>
      </div>
  </div>
</div>
`;
var temp4 = `
<div class="crt-msg">
  <div class="align-crt">
    <div class="aion-icon-crt"><img src="../images/Group 61.png" alt="#"></div>
    <div class="aion-result-generated" id="output">
      <div class="table-wrapper">
        <table class="fl-table loading">
          <thead>
                                        <tr>
                                            <th>Header 1</th>
                                            <th>Header 2</th>
                                            <th>Header 3</th>
                                            <th>Header 4</th>
                                            <th>Header 5</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Content 1</td>
                                            <td>Content 1</td>
                                            <td>Content 1</td>
                                            <td>Content 1</td>
                                            <td>Content 1</td>
                                        </tr>
                                        <tr>
                                            <td>Content 2</td>
                                            <td>Content 2</td>
                                            <td>Content 2</td>
                                            <td>Content 2</td>
                                            <td>Content 2</td>
                                        </tr>
                                        <tr>
                                            <td>Content 3</td>
                                            <td>Content 3</td>
                                            <td>Content 3</td>
                                            <td>Content 3</td>
                                            <td>Content 3</td>
                                        </tr>
                                        <tr>
                                            <td>Content 4</td>
                                            <td>Content 4</td>
                                            <td>Content 4</td>
                                            <td>Content 4</td>
                                            <td>Content 4</td>
                                        </tr>
                                        <tr>
                                            <td>Content 5</td>
                                            <td>Content 5</td>
                                            <td>Content 5</td>
                                            <td>Content 5</td>
                                            <td>Content 5</td>
                                        </tr>
                                        <tr>
                                            <td>Content 6</td>
                                            <td>Content 6</td>
                                            <td>Content 6</td>
                                            <td>Content 6</td>
                                            <td>Content 6</td>
                                        </tr>
                                        <tr>
                                            <td>Content 7</td>
                                            <td>Content 7</td>
                                            <td>Content 7</td>
                                            <td>Content 7</td>
                                            <td>Content 7</td>
                                        </tr>
                                        <tr>
                                            <td>Content 8</td>
                                            <td>Content 8</td>
                                            <td>Content 8</td>
                                            <td>Content 8</td>
                                            <td>Content 8</td>
                                        </tr>
                                        <tr>
                                            <td>Content 9</td>
                                            <td>Content 9</td>
                                            <td>Content 9</td>
                                            <td>Content 9</td>
                                            <td>Content 9</td>
                                        </tr>
                                        <tr>
                                            <td>Content 10</td>
                                            <td>Content 10</td>
                                            <td>Content 10</td>
                                            <td>Content 10</td>
                                            <td>Content 10</td>
                                        </tr>
                                    <tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="feedbackicons">
    <img src="../images/like.svg" alt="#" class="feed-back-icon">
    <img src="../images/dislike.svg" alt="#" class="feed-back-icon">
  </div>
  <div class="result-act-but">
    <div class="but-react">
      <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> <p class="but-title">Save Question</p> 
      </button>
    </div>
    <div class="but-react">
      <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> <p class="but-title">Copy Question</p> 
      </button>
    </div>
    <div class="but-react">
        <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> <p class="but-title">Edit</p> 
        </button>
      </div>
  </div>
</div>
`;
var pietemp=`         <div class="crt-msg">
                        <div class="align-crt">
                          <div class="aion-icon-crt"><img src="../images/Group 61.png" alt="#"></div>
                          <div class="aion-result-generated" id="output">
                            <h1 class="heading">Food consumption in a city</h1>
                               <div class="wrapper-pie">
                                   <div class="pie-wrap">
                                    <div class="light-yellow entry">
                                        <p class="entry-value">Rice</p>
                                    </div>
                                    <div class="sky-blue entry">
                                        <p class="entry-value">Pasta</p>
                                    </div>
                                    <div class="pink entry">
                                        <p class="entry-value">Beans </p>
                                    </div>
                                    <div class="purple entry">
                                        <p class="entry-value">Plantain</p>
                                    </div>
                                    <div class="green entry">
                                        <p class="entry-value">Potato</p>
                                    </div>       
                                    <div class="wheat entry">
                                        <p class="entry-value">Yam</p>
                                    </div>
                                   </div>

                                    <div class="key-wrap">
                                        <input type="radio" id="rice" name="values" class="rice-key"/>
                                        <label for="rice" class="rice-label"><span class="rad1"></span><span>Item 1</span></label>
                                        <input type="radio" name="values" id="beans" class="beans-key"/>
                                        <label for="beans" class="beans-label"><span class="rad2"></span><span>Item 2</span></label>
                                        <input type="radio" name="values" id="plantain" class="plantain-key"/>
                                        <label for="plantain" class="plantain-label"><span class="rad3"></span><span>Item 3</span></label>
                                        <input type="radio" name="values" id="potato" class="potato-key"/>
                                        <label for="potato" class="potato-label"><span class="rad4"></span><span>Item 4</span></label>
                                        <input type="radio" name="values" id="yam" class="yam-key"/>
                                        <label for="yam" class="yam-label"><span class="rad4"></span><span>Item 5</span></label>
                                        <input type="radio" name="values" id="pasta" class="pasta-key"/>
                                        <label for="pasta" class="pasta-label"><span class="rad5"></span><span>Item 6</span></label>
                                        <p class="rice-text text">25% of the people eat Rice</p>
                                        <p class="beans-text text">12.5% of the people eat Beans</p>
                                        <p class="plantain-text text">12.5% of the people eat Plantain</p>
                                        <p class="potato-text text">12.5% of the people eat Potato</p>
                                        <p class="yam-text text">12.5% of the people eat Yam</p>
                                        <p class="pasta-text text">25% of the people eat Pasta</p>
                                    </div>
                               </div>    
                            <p class="pie-describe" id="pie-describe${pieno}"></p>          
                          </div>
                        </div>
                        <div class="feedbackicons">
                          <img src="../images/like.svg" alt="#" class="feed-back-icon">
                          <img src="../images/dislike.svg" alt="#" class="feed-back-icon">
                        </div>
                        <div class="result-act-but">
                          <div class="but-react">
                            <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg> <p class="but-title">Save Question</p> 
                            </button>
                          </div>
                          <div class="but-react">
                            <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> <p class="but-title">Copy Question</p> 
                            </button>
                          </div>
                          <div class="but-react">
                              <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg> <p class="but-title">Edit</p> 
                              </button>
                            </div>
                        </div>
                    </div>
`;
var bartemp=`
                    <div class="crt-msg-bar">
                        <div class="align-crt">
                            <div class="aion-icon-crt">
                                <img src="../images/Group 61.png" alt="#"/>
                            </div>
                            <div class="aion-result-generated" id="output" >
                                <div class="bar-para-desc" id="bar-para-desc${barno}"></div>
                                <div class="bar-container">
                                    <div class="each-bar">
                                        <div class="bar">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Jan</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-2">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Feb</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-3">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Mar</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-4">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Apr</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-5">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">May</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-6">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Jun</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-7">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Jul</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-8">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Aug</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-9">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Sep</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-10">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Oct</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-11">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Nov</div>
                                    </div>
                                    <div class="each-bar">
                                        <div class="bar-12">
                                            <div class="bar-main-con">
                                                <div class="brr-1"></div>
                                                <div class="brr-2"></div>
                                                <div class="brr-3"></div>
                                            </div>
                                        </div>
                                        <div class="bar-desc">Dec</div>
                                    </div>
                                </div>
                                <div class="key-wrap-bar">
                                    <input type="radio" id="rice" name="values" class="rice-key"/>
                                    <label for="rice" class="rice-label"><span class="rad1"></span><span>Item 1</span></label>
                                    <input type="radio" name="values" id="beans" class="beans-key"/>
                                    <label for="beans" class="beans-label"><span class="rad2"></span><span>Item 2</span></label>
                                    <input type="radio" name="values" id="plantain" class="plantain-key"/>
                                    <label for="plantain" class="plantain-label"><span class="rad3"></span><span>Item 3</span></label>
                                    <input type="radio" name="values" id="potato" class="potato-key"/>
                                    <label for="potato" class="potato-label"><span class="rad4"></span><span>Item 4</span></label>
                                    <input type="radio" name="values" id="yam" class="yam-key"/>
                                    <label for="yam" class="yam-label"><span class="rad4"></span><span>Item 5</span></label>
                                    <input type="radio" name="values" id="pasta" class="pasta-key"/>
                                    <label for="pasta" class="pasta-label"><span class="rad5"></span><span>Item 6</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="feedbackicons">
                            <img src="../images/like.svg" alt="#" class="feed-back-icon">
                            <img src="../images/dislike.svg" alt="#" class="feed-back-icon">
                        </div>
                        <div class="result-act-but">
                            <div class="but-react">
                                <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> <p class="but-title">Save Question</p> 
                                </button>
                            </div>
                            <div class="but-react">
                                <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> <p class="but-title">Copy Question</p> 
                                </button>
                            </div>
                            <div class="but-react">
                                <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> <p class="but-title">Edit</p> 
                                </button>
                            </div>
                        </div>
                    </div>
`;
var newtable=`
                    <div class="crt-msg-bar" id="wid-set">
                        <div class="align-crt">
                            <div class="aion-icon-crt">
                                <img src="../images/Group 61.png" alt="#"/>
                            </div>
                            <div class="aion-result-generated" id="output" >
                                <div class="bar-para-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatum necessitatibus consequatur sunt suscipit. Id earum vitae libero porro officiis voluptates dolores quasi, sapiente nisi modi quod eius expedita natus!</div>
                                <div class="new_tab">
                                    <table>
                                        <tr>
                                            <th>Type</th>
                                            <th>Material</th>
                                            <th>Protection</th>
                                            <th>Weight</th>
                                                        <th>Stealth</th>
                                            <th>Encumbrance</th>
                                        </tr>
                                        <tr>
                                            <td>Hero</td>
                                            <td>2</td>
                                            <td>2</td>
                                            <td>2</td>
                                            <td>2</td>
                                            <td><p class="table-buttons" id="popdisp" onclick="tabformcr()">Submit</p></td>
                                        </tr>
                                        <tr>
                                            <td>Metro</td>
                                            <td>6</td>
                                            <td>6</td>
                                            <td>6</td>
                                            <td>6</td>
                                            <td><p class="table-buttons">Approve</p></td>
                                        </tr>
                                        <tr>
                                            <td>Volve</td>
                                            <td>9</td>
                                            <td>9</td>
                                            <td>9</td>
                                            <td>9</td>
                                            <td><p class="table-buttons">Submit</p></td>
                                        </tr>
                                        <tr>
                                            <td>Care</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td><p class="table-buttons">Done</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div class="feedbackicons">
                            <img src="../images/like.svg" alt="#" class="feed-back-icon">
                            <img src="../images/dislike.svg" alt="#" class="feed-back-icon">
                        </div>
                        <div class="result-act-but">
                            <div class="but-react">
                                <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> <p class="but-title">Save Question</p> 
                                </button>
                            </div>
                            <div class="but-react">
                                <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> <p class="but-title">Copy Question</p> 
                                </button>
                            </div>
                            <div class="but-react">
                                <button class="but-react-style"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.66667C1 2.73325 1 2.26654 1.18685 1.91002C1.3512 1.59641 1.61345 1.34144 1.93602 1.18166C2.30272 1 2.78277 1 3.74286 1H6.25714C7.21723 1 7.69728 1 8.06398 1.18166C8.38655 1.34144 8.6488 1.59641 8.81315 1.91002C9 2.26654 9 2.73325 9 3.66667V11L5 8.77778L1 11V3.66667Z" fill="white" stroke="#0F1E46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> <p class="but-title">Edit</p> 
                                </button>
                            </div>
                        </div>
                    </div>
`;
var errorTemplate = `
<div class="error-msg">
  <div class="msg-time"><p class="msg-time-det">Friday 2:20pm</p></div>
  <div class="result-display">
    <div class="aion-icon-error"><img src="../images/Group 108.png" alt=""></div>
    <div class="error-text"><p id="er${errors}"></p></div>
  </div>
</div>
`;
    var container = document.getElementById('container-append');
    const newElement = document.createElement('div');
    var comp =document.getElementById("input-text-prompt").value;
    if(comp==="generate me text"){
        newElement.innerHTML = temp1;
        container.appendChild(newElement);
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        
        var speed = 35; /* The speed/duration of the effect in milliseconds */
        const elementid1 = 'msg'+temp1no;
        typeWriter2(speed,elementid1);
        temp1no++;
        document.getElementById("input-text-prompt").value = "";
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });

  
    }
    if(comp === "generate me nice car images"){
        newElement.innerHTML = temp2;
        container.appendChild(newElement);
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        
        var speed = 35; /* The speed/duration of the effect in milliseconds */
        const elementid1 = 'msg2'+temp2no;
        typeWriter3(speed,elementid1);
        temp2no++;
        document.getElementById("input-text-prompt").value = "";
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
 
    }
    if(comp === "generate me a card template"){
        newElement.innerHTML = temp3;
        container.appendChild(newElement);
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        
        var speed = 35; /* The speed/duration of the effect in milliseconds */
        const elementid1 = 'msg3'+temp3no;
        typeWriter4(speed,elementid1);
        temp3no++;
        document.getElementById("input-text-prompt").value = "";
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    if(comp==="generate me a table"){
        newElement.innerHTML = temp4;
        container.appendChild(newElement);
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        document.getElementById("input-text-prompt").value = "";
    }
    if(comp==="generate me a pie chart"){
      newElement.innerHTML = pietemp;
      container.appendChild(newElement);
      newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      var speed = 35; 
        const elementid1 = 'pie-describe'+pieno;
        typeWriter5(speed,elementid1);
        pieno++;
        document.getElementById("input-text-prompt").value = "";
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  if(comp==="give me a new table"){
    newElement.innerHTML = newtable;
    container.appendChild(newElement);
    newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
  if(comp==="generate me a bar graph"){
    newElement.innerHTML = bartemp;
    container.appendChild(newElement);
    newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    var speed = 35; 
      const elementid1 = 'bar-para-desc'+barno;
      typeWriter6(speed,elementid1);
      barno++;
      document.getElementById("input-text-prompt").value = "";
      newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
    if(comp === ""){
        newElement.innerHTML = errorTemplate;
        container.appendChild(newElement);
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        var speed = 35; 
        const elementid = 'er'+errors;
        typeWriter(speed,elementid);
        errors++;
        newElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
   
}

function typeWriter(speed,elid) {
    var txt = 'The message you submitted was too long, please reload the conversation and submit something shorter.';
    
    if (i < txt.length) {
    document.getElementById(elid).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed ,speed , elid);
    }
    else{
        i=0;
    }
} 
function typeWriter2(speed,elid) {
  var txt = 'A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger,'; /* The text */
  
  if (a < txt.length) {
  document.getElementById(elid).innerHTML += txt.charAt(a);
  a++;
  setTimeout(typeWriter2, speed ,speed , elid);
  }
  else{
      a=0;
  }
} 
function typeWriter3(speed,elid) {
  var txt = "Cars have captivated hearts for over a century. From the thrill of the open road to the convenience of everyday transportation, they've become an integral part of our lives. The history of cars is a fascinating journey of innovation, from the sputtering steam engines of the 18th century to the sleek electric vehicles of today."; /* The text */
  
  if (b < txt.length) {
  document.getElementById(elid).innerHTML += txt.charAt(b);
  b++;
  setTimeout(typeWriter3, speed ,speed , elid);
  }
  else{
      b=0;
  }
} 
function typeWriter4(speed,elid) {
  var txt = "A digital artwork unfolds before you, showcasing a captivating scene of a bridge traversing a serene river nestled amidst a majestic mountain landscape. The foreground is dominated by a sturdy wooden bridge, its vertical supports and horizontal beams creating a sense of strength."; /* The text */
  
  if (c < txt.length) {
  document.getElementById(elid).innerHTML += txt.charAt(c);
  c++;
  setTimeout(typeWriter3, speed ,speed , elid);
  }
  else{
      c=0;
  }
} 
function typeWriter5(speed,elid) {
  var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque nostrum vero ipsum nam, omnis reiciendis cum, fugiat, id voluptatum iste neque qui debitis illum aliquid explicabo. Perferendis, soluta sunt? Officia eveniet dolore nam explicabo saepe ab ipsum. Aperiam explicabo labore, nobis hic nam laborum eveniet ratione mollitia consectetur quod autem tempora maiores porro, nostrum similique laboriosam iste corporis deserunt sunt animi ipsam molestiae. Commodi dolor nam temporibus iusto rem hic quasi culpa, omnis error cupiditate a sed dolores voluptatum quos in placeat quidem veniam! Nulla saepe numquam, assumenda a minima fugiat, repudiandae modi odio consectetur sequi ullam eos amet?"; /* The text */
  
  if (e < txt.length) {
  document.getElementById(elid).innerHTML += txt.charAt(e);
  e++;
  setTimeout(typeWriter5, speed ,speed , elid);
  }
  else{
      e=0;
  }
} 
function typeWriter6(speed,elid) {
  var txt ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatum necessitatibus consequatur sunt suscipit. Id earum vitae libero porro officiis voluptates dolores quasi, sapiente nisi modi quod eius expedita natus!";
  
  if (f< txt.length) {
  document.getElementById(elid).innerHTML += txt.charAt(f);
  f++;
  setTimeout(typeWriter6, speed ,speed , elid);
  }
  else{
      f=0;
  }
} 
const slider = document.getElementById('slider');
slider.style.background = `linear-gradient(to right, #0487FF 0%, #0FFBD0 50%, #EAECF0 50%, #EAECF0 100%`;
slider.addEventListener('input', () => {
  const percentage = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, #0487FF 0%, #0FFBD0 ${percentage}%, #EAECF0 ${percentage}%, #EAECF0 100%`;
  const x = document.getElementById('textContent');
  x.textContent=percentage;
});
const slider2 = document.getElementById('slider2');
slider2.style.background = `linear-gradient(to right, #0487FF 0%, #0FFBD0 50%, #EAECF0 50%, #EAECF0 100%`;
slider2.addEventListener('input', () => {
  const percentage = (slider2.value - slider2.min) / (slider2.max - slider2.min) * 100;
  slider2.style.background = `linear-gradient(to right, #0487FF 0%, #0FFBD0 ${percentage}%, #EAECF0 ${percentage}%, #EAECF0 100%`;
  const y = document.getElementById('textContent');
  y.textContent=percentage;
});
const slider3 = document.getElementById('slider3');
slider3.style.background = `linear-gradient(to right, #0487FF 0%, #0FFBD0 50%, #EAECF0 50%, #EAECF0 100%`;
slider3.addEventListener('input', () => {
  const percentage = (slider3.value - slider3.min) / (slider3.max - slider3.min) * 100;
  slider3.style.background = `linear-gradient(to right, #0487FF 0%, #0FFBD0 ${percentage}%, #EAECF0 ${percentage}%, #EAECF0 100%`;
  const z = document.getElementById('textContent');
  z.textContent=percentage;
});
const slider4 = document.getElementById('slider4');
slider4.style.background = `linear-gradient(to right, #0487FF 0%, #0FFBD0 50%, #EAECF0 50%, #EAECF0 100%`;
slider4.addEventListener('input', () => {
  const percentage = (slider4.value - slider4.min) / (slider4.max - slider4.min) * 100;
  slider4.style.background = `linear-gradient(to right, #0487FF 0%, #0FFBD0 ${percentage}%, #EAECF0 ${percentage}%, #EAECF0 100%`;
  const p = document.getElementById('textContent');
  p.textContent=percentage;
});
    // myLink.addEventListener("click", async function() {
    //     document.getElementById("table-form").style.display="flex";
    // });
function tabformcr(){
    const link = document.getElementById("statistic");
    const myLink = document.getElementById("popdisp");
    const pop =document.getElementById("table-form");
    document.getElementById("table-form").style.display="flex";
}
