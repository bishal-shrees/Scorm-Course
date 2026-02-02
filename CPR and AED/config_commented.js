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
    "title" : "Course Title",
    "content_path" : "./assets/",
    "is_locked" : false,
    "autohide_time" : 2000,
    "controls_hide" : false,
    "fullscreen" : false,
    "layout"	: {"bgColour": "rgba(255,255,255,0.8)","borderColour":["#a7001e", "#a7001e"], "highlightColour" :["#999", "#666"], "questionHighlightColour" : ["#fff", "#000"], "questionBorderColour" : ["#a7001e", "#a7001e"], "questionBgColour" : ["#a7001e", "#ccc"]},
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
            "title" : "Section Title",
            "slides" : [
                {
                    "title" : "Video slide title",
                    "type" : "video",
                    "location" : "internal",
                    "formats" : ["mp4"],
                    "external" : [{"link" : "vimeo url", "format" :"mp4", "min_size" : 0}],
                    "info" : {"title" : "HTML CONTENT"}
                },
                {
                    "title" : "Knowledge - Check",
                    "type" : "knowledge-check",
                    "retry_mode" : 0,
                    "retry_module" : 1,
                    "retry_module_text" : "knowledge check retry html content",
                    "questions" : [
                        {
                            "title" : "Question title 1",
                            "audio" : [],
                            "answer" : 0,
                            "answers" : [
                                {"text": "True","img": ""},
                                {"text": "False","img": ""}
                            ]
                        },
                        {
                            "title" : "Question title 2",
                            "audio" : [],
                            "answer" : 0,
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
            "title" : "Assessment Section Title",
            "slides" : [
                {
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
                        },
                        {
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
            ]
        }
    ]
}

/**
 *
 * INTERACTION SLIDE / QUESTIONS
 *
 *
 * CHECKBOXES
 *
 * presents the user with a grid of checkboxes to select from all required check-boxes must be checked to pass the slide
 
 * title : sets the slide title
 * type : set the slides type must read "checkboxes"
 * question_text : question text to display
 * instruction_text : display usage insructions to the user
 * audio : list of audio file to play (can be left blank i.e [])
            file : file name to play should be saved with a path following the below format:
            sections/{section number i.e 1}/slides/{slide number i.e 1}/{file}
            format : format of the audio file i.e "mp3"
 * columns | item_height | input_size | layout : control the visual layout of the interaction item
 * answers : array of objects defining the presented options for this question
                text : text to display for this answer
                check : weather this item shouldbe checked to pass

 * retry_mode : (0 | 1) controls if the users mustpass this slide to proceed
 * correct_text : text to display when slide is completed correctly
 * incorrect_text : text to display when slide is completed incorrectly
 * {
 "title" : "check boxes",
 "type" : "checkboxes",
 "question_text" : "What is meant by service basics and service excellence?",
 "instruction_text" :"Match definitions with the relevant terms.",
 "audio" : [],
 "columns" : 1,
 "item_height": 5,
 "input_size":2,
 "layout":[1,1,1,1],
 "answers" : [
 {"text": "The price on the shelf is what they pay.", "check":true},
 {"text": "Great service.", "check":true},
 {"text": "Clean hygienic store.", "check":true},
 {"text": "Wide range of products.", "check":true},
 {"text": "Products available when they do their shopping.", "check":true},
 {"text": "Great offers.", "check":true},
 {"text": "Quality own brand products.", "check":true},
 {"text": "Really goos fresh food.", "check":true},
 ],
 "retry_mode" : 0,
 "correct_text" : "global correct text</br>",
 "incorrect_text" : "global incorrect text</br>"
 }

 *
 * DRAG AND DROP PUZZLE PIECES
 *
 * presents the user with a grid of puzzle pieces to match all peices must be matched to pass the slide
 *
 * title : sets the slide title
 * type : set the slides type must read "drag-drop-puzzle"
 * question_text : question text to display
 * instruction_text : display usage insructions to the user
 * audio : list of audio file to play (can be left blank i.e [])
            file : file name to play should be saved with a path following the below format:
            sections/{section number i.e 1}/slides/{slide number i.e 1}/{file}
            format : format of the audio file i.e "mp3"
 * item_height | layout : control the visual layout of the interaction item
 * left : defines movabel puzzle peices these must be match with an element in the drags parameter
 * drags : array of objects defining the presented options for this question
                text : text to display for this answer
                answer : which array id in left this element should pair with

 * retry_mode : (0 | 1) controls if the users mustpass this slide to proceed
 * correct_text : text to display when slide is completed correctly
 * incorrect_text : text to display when slide is completed incorrectly
 
 {
 "title" : "drag and drop puzzle",
 "question_text" : "What is meant by service basics and service excellence?",
 "instruction_text" :"Match definitions with the relevant terms.",
 "type"	: "drag-drop-puzzle",
 "audio" : [],
 "item_height": 15,
 "layout":[10,15],
 "left"  : [	{"text":"Service basics"},
 {"text":"Service Excellence means"}],
 "drags" : [	{"text":"The minimum level of service the customer expects.", "answer":1},
 {"text":"Going the extra mile,</br>anticipating the customer\'s needs.", "answer":2},
 ],

 "retry_mode" : 0,
 "correct_text" : "global correct text</br>",
 "incorrect_text" : "global incorrect text</br>"

 }

 *
 * DRAG AND DROP LIST
 *
 * presents the user with a list of dragable itmes to arrange into a seperate list
 *
 * title : sets the slide title
 * type : set the slides type must read "drag-drop-list"
 * question_text : question text to display
 * instruction_text : display usage insructions to the user
 * audio : list of audio file to play (can be left blank i.e [])
            file : file name to play should be saved with a path following the below format:
            sections/{section number i.e 1}/slides/{slide number i.e 1}/{file}
            format : format of the audio file i.e "mp3"
 * item_height : controls the visual layout of the interaction items
 * drags : array of objects defining the presented options for this question
                text : text to display for this answer
                layout : controls the padding for this element
                answer : text to display when this item is selected 
 * start : controls positoning and arrangement of the starting area for the draggable answers
 * target : controls positoning and arrangement of the list area
                required_answers : the total number of answers required in the list to allow the slide to be assessed
                layout | cols | rows : controls the layout and arrangement for this element
                img : image to include for this answer should be saved with a path following the below format:
            sections/{section number i.e 1}/slides/{slide number i.e 1}/dragdroplists/{img}
                max_answers : the upper limit on selected answer for this slide
                answers : an array of correct answer indexes from the drags parameter.

 * retry_mode : (0 | 1) controls if the users mustpass this slide to proceed
 * correct_text : text to display when slide is completed correctly
 * incorrect_text : text to display when slide is completed incorrectly
 
 
 {
 "title" : "drag and drop list",
 "question_text" : "What standards do you think our customers expect when they shop in SupaValu?",
 "instruction_text" :"Drag and drop the answers from the list now on screen, into the \"SupaValu Brand Values\" image",
 "type"	: "drag-drop-list",
 "audio" : [],
 "item_height": 6,
 "drags" : [	{"text":"Friendly", "layout":[2,2,2,2], "answer" : "<b>Friendly,</b></br>Incorrect. Although this value is something our customers would like, our core values aim to deliver more</br>"},
 {"text":"Warm", "layout":[2,2,2,2], "answer" : "<b>Warm,</b></br>Incorrect. Although this value is something our customers would like, our core values aim to deliver more</br>"},
 {"text":"Convenient", "layout":[2,2,2,2], "answer" : "<b>Convenient,</b></br>Incorrect. Although this value is something our customers would like, our core values aim to deliver more</br>"},
 {"text":"Vibrant", "layout":[2,2,2,2], "answer" : "<b>Vibrant,</b></br>Correct, we are colourful, vibrant and energetic. We add colour and interest for food and life today.</br>"},
 {"text":"Genuine", "layout":[2,2,2,2], "answer" : "<b>Genuine,</b></br>Correct, we are friendly and approachable, after all we are real people.</br>"},
 {"text":"Inspiring", "layout":[2,2,2,2], "answer" : "<b>Inspiring,</b></br>Correct, we give hints, tips and inspiration to help people get the best out of what they buy from us.</br>"},
 {"text":"Committed", "layout":[2,2,2,2], "answer" : "<b>Committed,</b></br>Correct, we are honest and down to earth. We believe in what we do.</br>"},

 ],
 "start"  : {"text":"", "columns": 2, "layout":[2,2,2,2], "img":""},
 "target" : {"answers":[4,5,6,7], "required_answers": 4, "max_answers":99, "layout":[2,2,2,2], "img":"", "cols":2, "rows":3},
 "retry_mode" : 0,
 "correct_text" : "global correct text</br>",
 "incorrect_text" : "global incorrect text</br>"

 }

 *
 * DRAG AND DROP
 *
 * presents the user with a grid of dragabble elements and target to drg into
 
 * title : sets the slide title
 * type : set the slides type must read "drag-drop-targets"
 * question_text : question text to display
 * instruction_text : display usage insructions to the user
 * audio : list of audio file to play (can be left blank i.e [])
            file : file name to play should be saved with a path following the below format:
            sections/{section number i.e 1}/slides/{slide number i.e 1}/{file}
            format : format of the audio file i.e "mp3"
 * item_height : controls the visual layout of the interaction items
 * drags : array of objects defining the presented options for this question
                groups : index of which group object this element should be displayed for
                text : text to display for this answer
                layout : controls the padding for this element
 * groups : array of objects defining the presented draggable items and target areas for this slide
 				id : unique id for this element 
 				background : image to include for this answer should be saved with a path following the below format:
            sections/{section number i.e 1}/slides/{slide number i.e 1}/dragdroptargets/{img}
                text : title text for this area
                layout | width : controls the layout for this element
 * targets : defines which drags belong in which gourp
                groups : index of which group object this element should be displayed for
                layout : controls the layout and arrangement for this element
                answers : an array of correct answer indexes from the drags parameter.

 * retry_mode : (0 | 1) controls if the users mustpass this slide to proceed
 * correct_text : text to display when slide is completed correctly
 * incorrect_text : text to display when slide is completed incorrectly

 {
 "title" : "drag and drop",
 "question_text" : "Can you tell the difference between service basics and service excellence?",
 "instruction_text" :"Drag the answers to the correct areas.",
 "type"	: "drag-drop-targets",
 "audio" : [],
 "item_height": 12,
 "groups" : [{"id":"draggables", "title":"", "background":"", "width":33, "layout":[2.5,2,0,2]},
 {"id":"targets1", "title":"SERVICE BASICS", "background":"", "width":33, "layout":[40,2,0,2]},
 {"id":"targets2", "title":"SERVICE EXCELLENCE EXAMPLES", "background":"", "width":33, "layout":[40,2,0,2]}],

 "drags" : [	{"text":"Managing queues.", "group":1, "layout":[2,2,2,2]},
 {"text":"Wearing your name-badge and uniform with pride.", "group":1, "layout":[2,2,2,2]},
 {"text":"Following store standards.", "group":1, "layout":[2,2,2,2]},
 {"text":"Making suggestions -e.g. pointing out an offer.", "group":1, "layout":[2,2,2,2]},
 {"text":"Offering help.", "group":1, "layout":[2,2,2,2]},
 {"text":"Start friendly conversations.", "group":1, "layout":[2,2,2,2]},
 ],

 "targets" : [{"text":"", "group":2, "answers":[1,2,3], "layout":[2,2,2,2]}, {"text":"", "group":2, "answers":[1,2,3], "layout":[2,2,2,2]}, {"text":"", "group":2, "answers":[1,2,3], "layout":[2,2,2,2]},
 {"text":"", "group":3, "answers":[4,5,6], "layout":[2,2,2,2]}, {"text":"", "group":3, "answers":[4,5,6], "layout":[2,2,2,2]},{"text":"test 6", "group":3, "answers":[4,5,6], "layout":[2,2,2,2]}],
 "retry_mode" : 0,
 "correct_text" : "Well done, Service Basics are things we all</br> expect as customers. Service Excellence is going</br> that little bit further to think ahead for customers.",
 "incorrect_text" : "Try again remember Service Basics are</br> minimum standards customers expect. When</br> these aren\'t delivered customers leave</br> disappointed."

 }
 *
 */
