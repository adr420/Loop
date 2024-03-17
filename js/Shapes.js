/**
 * ==== HOW IT WORKS ====
 * 
 * -> Make a infinity loop using rules in joins store a copy.
 * -> Change the angles of each part.
 * -> Let the user solve the puzzle and match it with copy.
 * 
 */

const parts = {
    "1":"arc-top-left",
    "2":"arc-top-right",
    "3":"arc-bottom-right",
    "4":"arc-bottom-left"
};

const joins ={
    "1":[
        ["2",0]
    ], // possible parts that can come after 1(arc-top-left) at angle
    "2":[
        ["3",0]
    ],
    "3":[
        ["4",0]
    ],
    "4":[
        ["1",0]
    ]
}; // rules to make a infinity loop

const InfinityLoop = "1234";

export const Shapes = {
    init: function(){
        
    }
}