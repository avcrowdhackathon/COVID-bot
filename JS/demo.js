
// ########################################################################
// ## This is only a DEMO, the real chatbot is on https://covid-bot.com  ##
// ########################################################################


function scrollEndPage() {
    $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 700, "linear");
}



function usermsg(input_message) {
    $('#int-chat').append(`
    <div class="chat-user-msg">
    <div class="row">
        <div class="col-12">
            <div class="chat-oval-left">
                <!-- msg content goes here -->
                <div class="row user-msg-text">
                    <div class="col-12">
                        <h5>${input_message}</h5>
                    </div>

                </div>
            </div>
            <div class="chat-arrow-right"> </div>
        </div>
    </div>
</div>
        `); 

        setTimeout(function(){  
            $('#int-chat').append(`
            <div class="chat-split-same"></div>
    <div class="chat-bot-msg-typing">
    <div class="row">
        <div class="col-12">
            <div class="chat-arrow-left"> </div>
            <div class="chat-oval-right">
                <!-- msg content goes here -->
                <!-- Title -->
                <div class="row">
                    <div class="col-12">
                        <div class="typing-dots">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `);  scrollEndPage();
    }, 200);
}


function demoInfo() {
    $('#int-chat').append(`
    <div class="chat-bot-msg">
    <div class="row">
        <div class="col-12">
            <div class="chat-arrow-left"> </div>
            <div class="chat-oval-right">
                <!-- msg content goes here -->
                <!-- Title -->
                <div class="row">
                    <div class="col-12 bot-msg-title">
                        <h5>This is a DEMO version.</h5>
                    </div>
                </div>
                
                <div class="row">
                    
                    <div class="col-12 bot-msg-source">
                        <a href="https://covid-bot.com/" target="_blank" rel="noreferrer"> Live Version </a>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div class="chat-split-same"></div>
`);
    scrollEndPage();
}

// This are taken html snippets from the real chatbot. This is only a DEMO, the real chatbot is on https://covid-bot.com
function answer1() {
    $('#int-chat').append(`
    <div class="chat-bot-msg">
                <div class="row">
                    <div class="col-12">
                        <div class="chat-arrow-left"> </div>
                        <div class="chat-oval-right">
                            <!-- msg content goes here -->
                            <!-- Title -->
                            <div class="row">
                                <div class="col-12 bot-msg-title">
                                    <h5>What does it mean to "flatten the curve"?</h5>
                                </div>
                            </div>
                            <!-- Text -->
                            <div class="row">
                                <div class="col-12 bot-msg-text">
                                    <pre>When coronavirus hit Wuhan, China, it travelled fast.

By February hospitals were filled, and the waiting list to get an ambulance stretched into the hundreds.

Medical practitioners hadn’t yet gotten a handle on what they were dealing with, so social distancing measures weren’t taken until it was too late.

As a result, the epidemic curve, a graphic representation of the rapid spike in infections, was steep.

To keep hospitals and doctors’ offices from becoming overwhelmed with sick patients, the ultimate goal for public health authorities is to flatten this curve. Social distancing measures can make a serious impact when they’re implemented early, so that, over time, all patients get the resources they need.</pre>
                                </div>
                            </div>
                            <div class="row">
                                
                                <div class="col-12 bot-msg-source">
                                    <a href="https://www.youtube-nocookie.com/embed/D7uQwQTRDew" target="_blank" rel="noreferrer"> Source </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-split-same"></div>
            
            <div class="chat-bot-msg">
                <div class="row">
                    <div class="col-12">
                        <div class="chat-arrow-left"> </div>
                        <div class="chat-oval-right">
                            <!-- msg content goes here -->
                            <!-- Media -->
                            <div class="row">
                                <div class="col-12 bot-msg-media">
                                    <div class="bot-msg-video">
                                        <!-- class ce-iframe and data-ce-src for cookies control -->
                                        <!-- no need if using no-cookies link -->
                                        <iframe class="video-frame" src="https://www.youtube-nocookie.com/embed/D7uQwQTRDew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">

                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `);  scrollEndPage(); $(".chat-bot-msg-typing").remove();
        
 
}

function answer2() {
    $('#int-chat').append(`
    <div class="chat-bot-msg">
    <div class="row">
        <div class="col-12">
            <div class="chat-arrow-left"> </div>
            <div class="chat-oval-right">
                <!-- msg content goes here -->
                <!-- Title -->
                <div class="row">
                    <div class="col-12 bot-msg-title">
                        <h5>Can a mask protect you from the corona virus?</h5>
                    </div>
                </div>
                <!-- Text -->
                <div class="row">
                    <div class="col-12 bot-msg-text">
                        <pre>-Scientific studies have shown properly-fitted and worn N95 respirators provide greater protection than surgical masks 

-Masks are effective only when used in combination with frequent hand-cleaning with alcohol-based hand rub or soap and water.

-If you are healthy, you only need to wear a mask if you are taking care of a person with suspected 2019-nCoV infection. 

-Wear a mask if you are coughing or sneezing. 

-If you wear a mask, then you must know how to use it and dispose of it properly. 

-Surgical masks are designed to provide the wearer protection against large droplets, splashes or sprays of bodily or other hazardous fluids. 

-Surgical masks are loose fitting and don’t provide the wearer with a reliable level of protection from inhaling smaller airborne particles and are not considered respiratory protection. </pre>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-12 bot-msg-source">
                        <a href="https://www.fda.gov/food/food-safety-during-emergencies/use-respirators-facemasks-and-cloth-face-coverings-food-and-agriculture-sector-during-coronavirus" target="_blank" rel="noreferrer"> Source </a>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<div class="chat-split-same"></div>


                    `); 

}

function answer3() { 
    $('#int-chat').append(`
    <div class="chat-bot-msg">
    <div class="row">
        <div class="col-12">
            <div class="chat-arrow-left"> </div>
            <div class="chat-oval-right">
                <!-- msg content goes here -->
                <!-- Title -->
                <div class="row">
                    <div class="col-12 bot-msg-title">
                        <h5>Can I catch the coronavirus by eating food handled or prepared by others?</h5>
                    </div>
                </div>
                <!-- Text -->
                <div class="row">
                    <div class="col-12 bot-msg-text">
                        <pre>We are still learning about the transmission of the new coronavirus. It's not clear if it can be spread by an infected person through the food they have handled or prepared, but if so it would more likely be the exception than the rule.
That said, the new coronavirus is a respiratory virus known to spread by upper respiratory secretions, including airborne droplets after coughing or sneezing. The virus that causes COVID-19 has also been detected in the stool of certain people. 

So we currently cannot rule out the possibility of the infection being transmitted through food by an infected person who has not thoroughly washed their hands.
In the case of hot food, the virus would likely be killed by cooking. This may not be the case with uncooked foods like salads or sandwiches.</pre>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-12 bot-msg-source">
                        <a href="https://www.fda.gov/emergency-preparedness-and-response/mcm-issues/coronavirus-disease-2019-covid-19-frequently-asked-questions" target="_blank" rel="noreferrer"> Source </a>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<div class="chat-split-same"></div>
`); scrollEndPage(); $(".chat-bot-msg-typing").remove();

}


function show_examples() {

    $('#int-chat').append(`
    <div class="chat-bot-msg">
                        <div class="row">
                            <div class="col-12">

                                <div class="bot-suggestions" role="group" aria-label="Bot Suggestions">
                                    <div class="row">
                                        
                                        <div class="col-10 suggestion-wraper">
                                            <button type="button" class="btn" onClick="demoInfo(); return false;">What is COVID-19?</button>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        
                                        <div class="col-10 suggestion-wraper">
                                            <button type="button" class="btn" onClick="demoInfo(); return false;">Symptoms of COVID-19</button>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                     
                                        <div class="col-10 suggestion-wraper">
                                            <button type="button" class="btn" onClick="demoInfo(); return false;">How does coronavirus spread?</button>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                       
                                        <div class="col-10 suggestion-wraper">
                                            <button type="button" class="btn" onClick="demoInfo(); return false;">Meaning of flatten the curve?</button>
                                        </div>
                                     
                                    </div>
                                    <div class="row">
                                       
                                        <div class="col-10 suggestion-wraper">
                                            <button type="button" class="btn" onClick="demoInfo(); return false;">Per country statistics</button>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        
                                        <div class="col-10 suggestion-wraper">
                                            <button type="button" class="btn" onClick="demoInfo(); return false;">World statistics</button>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                       
                                        <div class="col-10 suggestion-wraper">
                                            <button type="button" class="btn" onClick="demoInfo(); return false;">Latest News</button>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                                
                                    `); scrollEndPage();
}


function about_me() {


    $('#int-chat').append(`
    <div class="chat-bot-msg">
    <div class="row">
        <div class="col-12">
            <div class="chat-arrow-left"> </div>
            <div class="chat-oval-right">
                <!-- msg content goes here -->
                <!-- Title -->
                <div class="row">
                    <div class="col-12 bot-msg-title">
                        <h5>I'm an AI-powered chat-bot developed by Innaton Technologies Ltd. to answer all your questions regarding COVID-19.</h5>
                    </div>
                </div>
                
                <div class="row">
                    
                    <div class="col-12 bot-msg-source">
                        <a href="https://covid-bot.com/" target="_blank" rel="noreferrer"> Learn More </a>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div class="chat-split-same"></div>
`);
    scrollEndPage();
}





function askMeSomething(){
    $('#int-chat').append(`
    <div class="chat-bot-msg">
    <div class="row">
        <div class="col-12">
            <div class="chat-arrow-left"> </div>
            <div class="chat-oval-right">
                <!-- msg content goes here -->
                <!-- Title -->
                <div class="row">
                    <div class="col-12 bot-msg-text">
                        <h5>Go ahead! Ask me anything related to COVID-19</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            `);
            scrollEndPage()
}


function resetAll() {
    $(".chat-bot-msg-typing").remove();
    const chatContainer = document.getElementById("int-chat");
    chatContainer.innerHTML = ' <div class="chat-split-same"></div> ';
}



function repeating(){ 
    console.log('running');
    resetAll();
    $('#int-chat').append(`
    <div class="chat-bot-msg-typing">
    <div class="row">
        <div class="col-12">
            <div class="chat-arrow-left"> </div>
            <div class="chat-oval-right">
                <!-- msg content goes here -->
                <!-- Title -->
                <div class="row">
                    <div class="col-12">
                        <div class="typing-dots">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `); 
        
  
            
            scrollEndPage();
                setTimeout(function(){ $(".chat-bot-msg-typing").remove(); $('#int-chat').append(`
                <div class="chat-bot-msg">
                <div class="row">
                    <div class="col-12">
                        <div class="chat-arrow-left"> </div>
                        <div class="chat-oval-right">
                            <!-- msg content goes here -->
                            <!-- Title -->
                            <div class="row">
                                <div class="col-12 bot-msg-text">
                                    <h5>Hey there, how can I help you?</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                     `);
                     scrollEndPage();
                    }, 500);
                    setTimeout(function(){  $('#int-chat').append(`
                    <div class="chat-bot-msg">
                    <div class="row">
                        <div class="col-12">

                            <div class="bot-suggestions" role="group" aria-label="Bot Suggestions">
                                
                                <div class="row">
                                    
                                    <div class="col-10 suggestion-wraper">
                                        <button type="button" class="btn" onClick="show_examples(); return false;">Example Questions</button>
                                    </div>
                                   
                                </div>
                                <div class="row">
                                    
                                    <div class="col-10 suggestion-wraper">
                                        <button type="button" class="btn" onClick="about_me(); return false;">About Me</button>
                                    </div>
                                   
                                </div>
                                <div class="row">
                                    
                                    <div class="col-10 suggestion-wraper">
                                        <button type="button" class="btn" onClick="askMeSomething(); return false;">Ask Me Something!</button>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                            
                                                 
                                                     `); 
                    scrollEndPage(); $(".chat-bot-msg-typing").remove();
                 }, 800);

                 setTimeout(function(){  usermsg('What is flattening the curve?');
                    scrollEndPage(); 
                 }, 2500);
                 setTimeout(function(){  answer1(); $(".chat-bot-msg-typing").remove();
                    scrollEndPage();
                 }, 3500);
                 setTimeout(function(){  usermsg('Can a mask protect me?');
                    scrollEndPage();
                 }, 6500);
                 setTimeout(function(){  answer2(); $(".chat-bot-msg-typing").remove();
                    scrollEndPage();
                 }, 7500);
                 setTimeout(function(){  usermsg('Can I get infected through food?');
                    scrollEndPage();
                 }, 10500);
                 setTimeout(function(){  answer3(); $(".chat-bot-msg-typing").remove();
                    scrollEndPage(); $(".chat-bot-msg-typing").remove();   
                 }, 11500);
                 setTimeout(function(){  
                    scrollEndPage(); 
                    var result='success';
                    return result;
                 }, 13500); 
                        
} 
function delay() {
    return new Promise(resolve => setTimeout(resolve, 12600));
  }
async function delayedLog(i) {
    // notice that we can await a function
    // that returns a promise
    repeating();
    await delay();
    console.log(i);
    
  }
 async function test1(num1) {
     var i;
        for (i=0; i<num1; i++) {
          await delayedLog(i);
        }
        console.log('Done!');
      }



//loop 10 times
window.onload = test1(100);