var config = {
    /**
     * This section controls global variables for the course
     *
     * title : this courses title will populate the final title tag.
     * is_locked : (true | false) this controls access to side-navigation options, true allows users to skip ahead in the course
     * controls_hide : (true | false) this controls if the app will try to hide video controls automatically, true hide controls.
     * fullscreen : (true | false) this controls if the app will attempt to go fullscreen automatically, true activates this functionality
     * layout : this parameters customise the ui colours single colours to be declared as rgba pairs of colours to be declared as hex
     * assess_max : this sets the maximum amount of assessment questions to present the user
     */
    "title" : "CPR and AED Awareness",
    "content_path" : "./assets/",
    "is_locked" : true,
    "autohide_time" : 2000,
    "controls_hide" : true,
    "fullscreen" : false,
    "layout"    : {"bgColour": "rgba(255,255,255,0.8)","borderColour":["#ef4b25", "#ef4b25"], "highlightColour" :["#999", "#666"], "questionHighlightColour" : ["#fff", "#000"], "questionBorderColour" : ["#ef4b25", "#ef4b25"], "questionBgColour" : ["#ef4b25", "#ccc"]},
    "assess_max" : 10,
    /**
     *
     * SECTIONS
     *
     * This section controls the order of activities in the assessment
     *
     * Each course is constructed from at least one section object :
     * {
            "title" : "Section Title",
            "slides" : []
       }
     * Each section should contain at least one slide object listed as an array in the slide parameter,
     *
     * most sections should finish with a knowledge-check slide,
     * each course should finish with a section containing an assessment slide,
     *
     * Below each slide type is documented
     *
     * VIDEOS
     *
     * {
            "title" : "Video slide title",
            "type" : "video",
            "location" : "internal",
            "formats" : ["mp4"],
            "external" : [{"link" : "vimeo url", "format" :"mp4", "min_size" : 0}],
            "info" : {"title" : "HTML CONTENT"}
        }

     * title : sets the slide title
     * type : set the slides type must read "video" to load the video playing functionality
     * location : (internal | external) internal : denotes that the video is hosted within the course and should be saved in the section folder with a path following the below format:
                  sections/{section number i.e 1}/slides/{slide number i.e 1}/video.mp4
                  external : denotes this video is hosted externally (currently with vimeo) with this property set the "external" parameter block will be used
     * formats : lists the available formats should be formatted ["format 1", "format 2"]
     * external : Options to use when location parameter is set to "external"
            link : url to externally hosted video
            format : the format of the video
            min_size : which version of the video to load : 0 loads smallest video other values should be in minimum pixel width i.e 720
     *
     * info : key values pairs which populate the information panel. (can include html text or links) each key name will create a anchor link for each value of html content
     *
     *
     * KNOWLEDGE CHECK
     *
     * each knowledge check must contain at least one question object in the questions parameter
     *
     * {
                    "title" : "Knowledge - Check",
                    "type" : "knowledge-check",
                    "retry_mode" : 0,
                    "retry_module" : 1,
                    "retry_module_text" : "<b>HTML retry module text</b>",
                    "questions" : [
                        {
                            "title" : "Question text",
                            "audio" : [],
                            "answer" : 0,
                            "answers" : [
                                {"text": "True","img": ""},
                                {"text": "False","img": ""}
                            ]
                        }
                    ]
                }
     *
     * title : sets the slide title
     * type : set the slides type must read "knowledge-check"
     * retry_mode : (0 | 1) controls if the users mustpass this knowledge check to proceed
     * retry_module : (0 | 1) prompts the user to retake the proceeding section upon failing this knowledge check
     * retry_module_text : html text to present to user when a retry is required
     *
     * KNOWLEDGE CHECK QUESTIONS
     * {
            "title" : "Question text",
            "audio" : [{"file": "sound_file.mp3", "format" : "mp3"}],
            "answer" : 0,
            "answers" : [
                {"text": "True","img": ""},
                {"text": "False","img": ""}
            ]
       }
     *
     * title : question text
     * audio : list of audio file to play (can be left blank i.e [])
            file : file name to play should be saved with a path following the below format:
            sections/{section number i.e 1}/slides/{slide number i.e 1}/{file}
            format : format of the audio file i.e "mp3"
     * answer : the zero based index for the correct answer to this question within the below answers array
     * answers : array of objects defining the presented options for this question
            text : text to display for this answer
            img : image to include for this answer should be saved with a path following the below format:
            sections/{section number i.e 1}/slides/{slide number i.e 1}/{img}
     *
     *
     * ASSESSMENTS
     *
     * each assessment must contain at least one question object in the questions parameter
     *
     *  {
                    "title" : "Assessment",
                    "type" : "assessment",
                    "always_random" : true,
                    "log_incorrect" : "true",
                    "log_incorrect_title" : "Assessment breakdown",
                    "log_incorrect_text" : "instructions here",
                    "passing_score" : 80,
                    "questions" : [

                        {
                            "title" : "Assessment Question Title 1",
                            "audio" : [],
                            "answer" : 1,
                            "answers" : [
                                {"text": "True","img": ""},
                                {"text": "False","img": ""}
                            ]
                        }{
                            "title" : "Assessment Question Title 2",
                            "audio" : [],
                            "answer" : 1,
                            "answers" : [
                                {"text": "True","img": ""},
                                {"text": "False","img": ""}
                            ]
                        }
                    ]
                }
     *
     * title : sets the slide title
     * type : set the slides type must read "assessment"
     * always_random : (true | false) denotes if questions should be selected randomly on each attempt of the assessment
     * log_incorrect : (true | false) denotes if the assessment displays which question were answered incorrectly
     * log_incorrect_title : title for the incorrect answers section of the results page
     * log_incorrect_text : instructions to present the user regarding incorrect answers
     * passing_score : percentage of correct answers required in order to pass the assessment
     *
     * ASSESSMENT QUESTIONS
     * {
            "title" : "Question text",
            "audio" : [{"file": "sound_file.mp3", "format" : "mp3"}],
            "answer" : 0,
            "answers" : [
                {"text": "True","img": ""},
                {"text": "False","img": ""}
            ]
       }
     *
     * title : question text
     * audio : list of audio file to play (can be left blank i.e [])
            file : file name to play should be saved with a path following the below format:
                   sections/{section number i.e 1}/slides/{slide number i.e 1}/{file}
            format : format of the audio file i.e "mp3"
     * answer : the zero based index for the correct answer to this question within the below answers array
     * answers : array of objects defining the presented options for this question
                text : text to display for this answer
                img : image to include for this answer should be saved with a path following the below format:
     sections/{section number i.e 1}/slides/{slide number i.e 1}/{img}
     *
     *
     * in additon to these 3 main slide types there are some interaction based slides
     * that can either be placed in the Assessment "questions" array or be used as slide in their own right these
     * slide are documented at the bottom of this document.
     *
     *
     */
   "sections" : [
		{
			"title" : "Introduction",
			"slides" : [
				{
					"title" : "Course Introduction",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>1.01: Course Introduction</b><p>Hello and welcome to this ‘CPR and Defibrillation Awareness’ Course. The aim of this programme is to inform you about how to respond when you suspect someone is having a heart attack, how to perform Cardiopulmonary Resuscitation or CPR, and how to rapidly deploy and use a defibrillator or AED machine if there is one available.</p><p>To navigate through this course, simply click on the buttons below. To progress, click the forward button. To replay a module, click the replay button. Or if you need to go back over a certain part, simply click the back button. When you have completed this course, your final task is to take a short assessment. So, if you're ready, let's begin.</p>"}
				},
				{
					"title" : "What You Will Learn",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>1.02: What You Will Learn</b><p>By the end of this course, you will be able to understand what defibrillation is, and under what circumstances you may need to use an AED. In addition, we will show you how to correctly use a defibrillator, prior to any practical training which you should receive before administering treatment to a suspected cardiac arrest.</p>"}
				},
				{
					"title" : "What Is CPR?",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>1.03: What Is CPR?</b><p>Cardiopulmonary Resuscitation is the kiss of life or heart massage. It is an immediate medical treatment designed to keep blood pumping through the body by forcing the heart to pump after it has stopped working.</p><p>Although all of the cells in your body require oxygen to survive, they also require a good supply of nutrients. Oxygen and nutrients are carried around the body by the blood which is pumped by your heart. When the heart goes into cardiac arrest, the oxygen cannot feed the cells in your body, and most critically, your brain.</p><p>It is essential that when a person goes into cardiac arrest, their heart is kept pumping. This can be done manually by compressing the patient’s chest hard and fast to ensure that the blood maintains its flow throughout the body until the emergency services arrive. Up until recently, this was achieved by a combination of chest compressions and mouth-to-mouth resuscitation. However, the prevailing medical advice is that effective chest compressions alone are enough to improve the patient’s chances of survival. We will look at the precise techniques used later in this course.</p>"}
				},
				{
					"title" : "What Is Defibrillation?",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>1.04: What Is Defibrillation?</b><p>Defibrillation is administered to patients who have suffered a cardiac arrest. It consists of delivering a therapeutic dose of electrical energy to the heart. This depolarises a critical mass of the heart muscle, terminates the abnormal rhythm and allows normal sinus rhythm to be re-established by the body’s natural pacemaker.</p><p>The correct use of an AED can dramatically increase a victim’s chance of survival. Although the AED was designed for anyone to use, it is important to be able to identify a cardiac arrest and how to deal with it and to identify the condition of the patient.</p>"}
					},
				{
					"title" : "Demonstrating CPR",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>1.05: Demonstrating CPR</b><p>Once you’ve found that someone isn’t breathing, you should start CPR by administering 30 chest compressions. Interlock your hands and place them in the middle of the person’s chest and push down at least two inches into their chest at a rate of between 100 and 120 compressions per minute.</p>"}
				},
				{
					"title" : "Knowledge Check",
					"type" : "knowledge-check",
					"questions" : [
						{
							"title" : "State whether True or False<br><br>You should administer defibrillation on patients who clearly have a pulse.",
							"audio" : [],
							"answer" : 1,
							"answers" : [
								{"text": "True","img": ""},
								{"text": "False","img": ""}
							]
						},
						{
							"title" : "State whether True or False<br><br>No matter how long a person's heart has stopped, it can always be restarted when the emergency services arrive.",
							"audio" : [],
							"answer" : 1,
							"answers" : [
								{"text": "True","img": ""},
								{"text": "False","img": ""}
							]
						}
					]
				}
			]
		},
		{
			"title" : "Cardiac Arrest",
			"slides" : [
				{
					"title" : "Introduction",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.01: Introduction</b><p>In the following module, we will look at situations where you may need to perform CPR and deploy an AED. First, let’s take a look at sudden cardiac arrest and how to identify the symptoms of it.</p><p>If you’re ready, let’s continue.</p>"}
				},
				{
					"title" : "Sudden Cardiac Arrest (SCA)",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.02: Sudden Cardiac Arrest (SCA)</b><p>The first step is the most important step of all. You need to be entirely sure that the person you are treating is suffering from a sudden cardiac arrest or SCA; otherwise, you are putting both them and yourself in potential danger. If the person isn't breathing, or if they are unconscious, you need to check for a response. Speak to them and see if they can answer. Check for breathing. The main thing to remember is that, if a person is not breathing, they need CPR. Remain calm. Call an emergency responder number. Try and get an AED as fast as possible. Most workplaces and other establishments will have an AED.</p>"}
				},
				{
					"title" : "Chain of Survival",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.03: Chain of Survival</b><p>There is a chain of survival that first aiders must adhere to when responding to a Sudden Cardiac Arrest. These are:</p><p><ul><li>Early access - Make a phone call to the emergency services</li><li>Early CPR - Start chest compressions</li><li>Early AED - Use a defibrillator as soon as one becomes available</li><li>Early advanced care - Wait for the paramedics to arrive</li><li>Post resuscitation - Getting the patient to the hospital</li></ul></p><p>By following these steps you will greatly increase the patient’s chances of survival.</p>"}
				},
				{
					"title" : "How to Help Someone Who Has Collapsed?",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.04: How to Help Someone Who Has Collapsed?</b><p>If you witness somebody collapsing, here’s a simple way which will help you to remember what to do:</p><p>It’s called “DOCTOR ABC”.</p><p>D is for Danger: Check for any dangers to yourself.</p><p>R is for Response: Check for a response from the casualty. Shout and gently shake them on the shoulders.</p><p>A is for Airway: Kneel by the casualty’s head and open their airway by tilting their head backwards.</p><p>B is for Breathing: Place your ear above their mouth and look at their chest. Check for normal breathing (regular breaths) for up to 10 seconds.</p><p>C is for Compressions: If the casualty is not breathing, you should call an ambulance and start chest compressions.</p>"}
				},
				{
					"title" : "Purpose and Procedure of CPR",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.05: Purpose and Procedure of CPR</b><p>CPR, or Cardiopulmonary Resuscitation, is an emergency procedure performed in an effort to manually preserve brain function until further measures are taken to restore blood circulation and breathing in a person who is in cardiac arrest. CPR alone is unlikely to restart the heart. Its main purpose is to restore a flow of oxygenated blood to the brain and heart. CPR is performed on an unconscious casualty, and involves chest compressions at least five cm or two inches deep, and at a rate of at least 100 compressions per minute. The rescuer should place one hand over the other, interlocking the fingers, and press on the area above a casualty’s heart.</p><p>With a baby, the rescuer should only use two fingers for compressions. The rescuer traditionally provided breaths by exhaling into the subject's mouth or nose, although this is not common practice anymore. A rescuer can continue to administer CPR until professional medics arrive. However, with an infant under one year old and a child up to the age of eight years, it is necessary to provide mouth-to-mouth resuscitation.</p>"}
				},
				{
					"title" : "The Heart",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.06: The Heart </b><p>The heart is a large muscle that consistently contracts to eject blood before relaxing to allow refilling. Its function is to push blood around the body. The heart has four different rhythmic states, and while it is not necessary to recognise the heart rhythms when using an AED, it is worthwhile knowing what they are:</p><p><ul><li>The two ‘non-shockable rhythms’ are the normal sinus rhythm and flatline</li><li>The two heart rhythms that are considered ‘shockable’ are ventricular fibrillation (VF) and  pulseless ventricular tachycardia (VT)</li></ul></p><p>The computer chip inside the defibrillator has the ability to read the different types of heart rhythms and will not allow a shock to be delivered unless it is necessary. The defibrillator monitors this activity through the electrodes. Understand that most defibrillators on the market now come with a memory card slot or download socket, so the medical history can be accessed by health professionals when they arrive on the scene.</p>"}
				
				
					},
				{
					"title" : "Different Techniques for Resuscitation",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.07: Different Techniques for Resuscitation</b><p>Adults and babies require different techniques for resuscitation by CPR, which should be adhered to at all times.</p><p>An adult or child can be compressed with two hands, at a rate of at least 100 compressions per minute, and a chest depth of one-third.</p><p>A baby should only be compressed with two fingers, at the rate of at least 100 compressions per minute.</p>"}
				
				
					},
				{
					"title" : "Will the Casualty Wake Up?",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.08: Will the Casualty Wake Up?</b><p>You should not expect your casualty to wake up during CPR as this is very unlikely to happen. By doing chest compressions, you are taking over the job of the casualty’s heart (which has stopped) by forcibly compressing it. In effect, you are acting as a life-support machine for the person.</p><p>In order for the heart to be restarted, it may require an electrical shock from a defibrillator or drugs given by a paramedic/doctor. CPR on its own is very unlikely to restart someone’s heart. However, good quality chest compressions will significantly increase the chance of the defibrillator being able to restart the heart.</p>"}
				
				
					},
				{
					"title" : "When to Stop Doing CPR",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.09: When to Stop Doing CPR</b><p>You should only stop doing CPR if:</p><p><ul><li>A defibrillator arrives and is about to be used</li><li>The casualty shows signs of life: coughing, breathing</li><li>You are asked to stop by a healthcare professional</li><li>You become too exhausted to continue</li><li>The situation suddenly becomes too dangerous</li></ul></p><p> Ideally, you should only carry out CPR for a couple of minutes before swapping with someone else.</p>"}
				
			
					},
				{
					"title" : "AEDs",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.10: AEDs</b><p>Defibrillation machines are more commonly known as Automatic External Defibrillators or AEDs. In 1996, they were available commercially for the first time from hospitals.</p><p>Following a sudden cardiac arrest, oxygen is cut off, and tissue damage to the brain starts to occur in three to four minutes. This is reversible in most patients if they receive a shock to the heart and it starts beating regularly again. In fact, CPR and defibrillation have been shown to be the two most important factors in a patient surviving a Sudden Cardiac Arrest, and a victim’s chance of survival is reduced by approximately ten per cent with every minute that passes without CPR or defibrillation.</p>"}
				
				
					},
				{
					"title" : "Knowing the AED",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.11: Knowing the AED</b><p>You should familiarise yourself with an AED kit. Although most differ, all of them share common features. There will always be instructions provided through audible and visual prompts.</p><p>A standard AED kit is also equipped with the following accessories:</p><p><ul><li>Resuscitation mask</li><li>Gloves for the person administering CPR</li><li>A razor and scissors for shaving the casualty’s chest and cutting their clothes</li><li>Gauze wipes for disinfection</li><li>Spare battery as an extra precaution</li><li>A space blanket</li></ul></p>"}
				
		
					},
				{
					"title" : "Workplace",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.12: Workplace</b><p>Most workplaces now have an AED machine. In the workplace, the defibrillator should be maintained by a qualified operator only. No one else should tamper with it under any circumstances. It should be checked on a weekly basis.</p>"}
				
				
					},
				{
					"title" : "What Does an AED Do?",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.13:What Does an AED Do?</b><p>Whenever possible, CPR should be jointly delivered with defibrillation. If there is an AED available, it should be used at the earliest possible time. An AED will guide the operator through the steps of defibrillation by using clear, calm voice prompts. It comes equipped with adhesive pads that are applied to the chest of the casualty suffering a cardiac arrest. These pads must be applied to bare skin and without obstructions.</p><p>Proper electrode placement ensures that the axis of the heart is directly situated between the sources of current. Once the signal is received between the two pads on the chest, the AED will analyse the heart rhythm to determine if an electric shock can be delivered. The AED will deliver a controlled electrical shock from pad to pad, through the casualty's heart, in an attempt to restart the heart.</p>"}
				
				
					},
				{
					"title" : "Shock",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.14: Shock</b><p>Note that the AED is able to deliver three successive electric shocks, then will wait two minutes before analysing heart rhythm again. It is vital that the patient receives regular CPR during this two minutes phase. The electric current delivered by the AED is measured in joules. You can check with the manufacturer for instructions, as well as what the shock output is per individual defibrillator.</p><p>When the machine is analysing and delivering the shock, you must ensure that there is no other person obstructing the patient nor in contact with the patient. Safety is critical.</p><p> Remember:<ul><li> Continue CPR until the AED arrives</li><li> Deploy the AED immediately</li><li> After delivering the initial shock, if there is no response from the patient, continue CPR until the AED can deliver another shock</li><li> Repeat this process until medical help arrives</li></ul></p>"}
				},
				{
					"title" : "Knowledge Check",
					"type" : "knowledge-check",
					"questions" : [
						{
							"title" : "State whether True or False<br><br>You should use the same resuscitation techniques on babies as you do on adults.",
							"audio" : [],
							"answer" : 1,
							"answers" : [
								{"text": "True","img": ""},
								{"text": "False","img": ""}
							]
						}
					]
				},
				{
						"title" : "Presenter Conclusion",
					"type" : "video",
					"location" : "internal",
					"formats" : ["mp4"],
					"external" : [],
					"info" : {"Transcript": "<b>2.15:Presenter Conclusion</b><p>That concludes our course on the awareness of CPR and Defibrillation techniques. By now, you should be aware of the function of defibrillation and how to use an AED in the safest manner.</p><p>If you are happy to continue, you will now undertake a short exam. If you have answered the questions correctly so far, then you are ready for the exam. If you haven't, it might be worthwhile replaying this, or any other module. Remember, if you fail the exam you may sit it again, however, each attempt is recorded.</p><p>Best of luck.</p>"}
				}
			]
		},
		{
			"title" : "Assessment",
			 "slides" : [
                {
                    "title" : "Assessment",
                    "type" : "assessment",
                    "always_random" : true,
                    "log_incorrect" : "false",
                    "log_incorrect_title" : "Assessment breakdown",
                    "log_incorrect_text" : "",
                    "passing_score" : 80,
                    "questions" : [
						{//1
							"title" : "Choose the right answer<br><br>What does 'C' in “DOCTOR ABC” stand for?",
                            "audio" : [],
                            "answer" : 1,
                            "answers" : [
                                {"text": "Cardio","img": ""},
                                {"text": "Compressions","img": ""},
                                {"text": "Controls","img": ""},
                                {"text": "Cardiopulmonary","img": ""},
                            ]
                        },
						{//2
							"title" : "State whether True or False<br><br>CPR is used to restart the heart.",
							"audio" : [],
							"answer" : 1,
							"answers" : [
								{"text": "True","img": ""},
								{"text": "False","img": ""}
							]
						},
						{//3
							"title" : "Fill in the blank<br><br>Without oxygen supply, irreversible brain damage occurs within the first ___ minutes.",
							"audio" : [],
							"answer" : 0,
							"answers" : [
								{"text": "3-4","img": ""},
								{"text": "5-10","img": ""},
								{"text": "10-15","img": ""},
							]
						},
						{//4
							"title" : "Fill in the blank<br><br>A victim’s chance of survival is reduced by ___% with every minute that passes without CPR or defibrillation.",
							"audio" : [],
							"answer" : 2,
							"answers" : [
								{"text": "5","img": ""},
								{"text": "7","img": ""},
								{"text": "10","img": ""},
								{"text": "12","img": ""}
							]
						},
						{//5
							"title" : "Choose the right answer<br><br>Which of the following is the main function of the heart? ",
							"audio" : [],
							"answer" : 1,
							"answers" : [
								{"text": "It controls motor functions","img": ""},
								{"text": "It pumps blood around the body","img": ""},
								{"text": "It controls the nerves","img": ""},
								{"text": "All of the above","img": ""}
							]
						},
						{//6
							"title" : "Choose the right answer<br><br>Which of the following is CPR known as? ",
							"audio" : [],
							"answer" : 3,
							"answers" : [
								{"text": "The Kiss of Life","img": ""},
								{"text": "Resuscitation","img": ""},
								{"text": "Heart massage","img": ""},
								{"text": "All of the above","img": ""}
							]
						},
						{//7
							"title" : "Choose the right answer<br><br> How do you recognise a Sudden Cardiac Arrest? ",
							"audio" : [],
							"answer" : 1,
							"answers" : [
								{"text": "The patient is unconscious","img": ""},
								{"text": "An absence of pulse","img": ""},
								{"text": "Pain in the left arm","img": ""},
								{"text": "Bleeding","img": ""}
							]
						},
						{//8
							"title" : "Choose the right answer<br><br>Which of the following should be done before applying pads: ",
							"audio" : [],
							"answer" : 3,
							"answers" : [
								{"text": "The chest needs to be bare","img": ""},
								{"text": "The chest needs to be dry","img": ""},
								{"text": "The chest needs to be shaved","img": ""},
								{"text": "All of above","img": ""}
							]
						},
						{//9
							"title" : "State whether True or False<br><br>Compressions vary between adults, children and babies.",
							"audio" : [],
							"answer" : 0,
							"answers" : [
								{"text": "True","img": ""},
                                {"text": "False","img": ""}
							]
						},
						{//10
                            "title" : "Choose the right answer<br><br>A baby should only be compressed with: ",
                            "audio" : [],
                            "answer" : 1,
                            "answers" : [
                                {"text": "1 finger","img": ""},
                                {"text": "2 fingers","img": ""},
                                {"text": "1 hand","img": ""},
                                {"text": "None of the above","img": ""}
                            ]
                        },
						{//11
							"title" : "Choose the right answer<br><br>In the workplace, who should maintain a defibrillator? ",
							"audio" : [],
							"answer" : 0,
							"answers" : [
								{"text": "A Qualified operator","img": ""},
								{"text": "A Manager","img": ""},
								{"text": "Everyone","img": ""},
								{"text": "No one","img": ""}
							
							]
						},
                        {//12
                            "title" : "Fill in the blank<br><br>The electric current delivered by the AED is measured in _____. ",
                            "audio" : [],
                            "answer" : 1,
                            "answers" : [
                                {"text": "erg","img": ""},
                                {"text": "joules ","img": ""},
                                {"text": "kcal","img": ""},
                                {"text": "Newton-meters","img": ""}
                            
                            ]
                        },
                        {//13
                            "title" : "Choose the right answer<br><br>Which of the following sequences must be adhered to when responding to a sudden cardiac arrest? ",
                            "audio" : [],
                            "answer" : 3,
                            "answers" : [
                                {"text": "Early access –> Early AED –> Early CPR –> Early advanced care –> Post resuscitation","img": ""},
                                {"text": "Early CPR –> Early access –> Early AED –> Early advanced care –> Post resuscitation","img": ""},
                                {"text": "Early AED –> Early access –> Early CPR –> Early advanced care –> Post resuscitation ","img": ""},
                                {"text": "Early access –> Early CPR –> Early AED –> Early advanced care –> Post resuscitation","img": ""}
                            
                            ]
                        },
                         {//14
                            "title" : "Choose the right answer<br><br>The two heart rhythms that are considered ‘shockable’ are the: ",
                            "audio" : [],
                            "answer" : 1,
                            "answers" : [
                                {"text": "normal sinus rhythm and flat line","img": ""},
                                {"text": "ventricular fibrillation and ventricular tachycardia ","img": ""},
                                {"text": "normal sinus rhythm and ventricular tachycardia","img": ""},
                                {"text": "ventricular fibrillation and flat line","img": ""}
                            
                            ]
                        },
                        {//15
                            "title" : "Choose the right answer<br><br>Defibrillation machines are more commonly known as ___________________.",
                            "audio" : [],
                            "answer" : 0,
                            "answers" : [
                                {"text": "Automated External Defibrillators","img": ""},
                                {"text": "Automatic Exterior Fibres","img": ""},
                                {"text": "Automated Extrinsic Fillers","img": ""},
                                {"text": "Automatic Extraneous Defibrillators","img": ""}
                            
                            ]
                        },
                        {//16
                            "title" : "Choose the right answer<br><br>The two ‘non-shockable rhythms’ are _________________.",
                            "audio" : [],
                            "answer" : 0,
                            "answers" : [
                                {"text": "Normal sinus rhythm and flat line","img": ""},
                                {"text": "Normal sinus rhythm and variable line","img": ""},
                                {"text": "Flat sinus rhythm and normal line","img": ""},
                                {"text": "Flat sinus rhythm and variable line","img": ""}
                            
                            ]
                        },
                        {//17
                            "title" : "State whether True or False<br><br>The correct use of an A.E.D. can dramatically increase a victim’s chance of survival.",
                            "audio" : [],
                            "answer" : 0,
                            "answers" : [
                                {"text": "True","img": ""},
                                {"text": "False","img": ""}
                            ]
                        },
					]
				}
			]	
		}
	]
}

