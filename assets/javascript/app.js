$(document).ready(function () {

    var quest = [{

            Question: "Bane, Max Rockatansky, Shizon, and Ivan Locke",
            a: {
                answer: "Sean Bean",
                correct: false,
            },
            b: {
                answer: "Tom Cruise",
                correct: false,
            },
            c: {
                answer: "Tom Hardy",
                correct: true,
            },
            d: {
                answer: "Christian Bale",
                correct: false,
            },
        },

        {
            Question: "Imperator Furiosa, Lorraine Broughtom, Cipher, and Aeon Flux",
            a: {
                answer: "Charlize Theron",
                correct: true,
            },
            b: {
                answer: "Natalie Portman",
                correct: false,
            },
            c: {
                answer: "Amy Adams",
                correct: false,
            },
            d: {
                answer: "Kate Beckinsale",
                correct: false,
            },
        },

        {
            Question: "John Smith, Banjamin Button, Jesse James, and Achilles",
            a: {
                answer: "Johnny Depp",
                correct: false,
            },
            b: {
                answer: "Brad Pitt",
                correct: true,
            },
            c: {
                answer: "Leonardo DiCaprio",
                correct: false,
            },
            d: {
                answer: "Guy Pearce",
                correct: false,
            },
        },

        {
            Question: "Agent Smith, Elrond, V, and Megatron",
            a: {
                answer: "Mark Strong",
                correct: false,
            },
            b: {
                answer: "Michael Gambon",
                correct: false,
            },
            c: {
                answer: "Hugo Weaving",
                correct: true,
            },
            d: {
                answer: "Anthony Hopkins",
                correct: false,
            },
        },

        {
            Question: "Elizabeth Bennet, Guinevere, Elizabeth Swann, and Sabé",
            a: {
                answer: "Kate Winslet",
                correct: false,
            },
            b: {
                answer: "Emily Blunt",
                correct: false,
            },
            c: {
                answer: "Natalie Portman",
                correct: false,
            },
            d: {
                answer: "Keira Knightly",
                correct: true,
            },
        },

        {
            Question: "White Queen, Mia Thermopolis, Agent 99, Selina Kyle",
            a: {
                answer: "Amy Adams",
                correct: false,
            },
            b: {
                answer: "Anne Hathaway",
                correct: true,
            },
            c: {
                answer: "Reese Witherspoon",
                correct: false,
            },
            d: {
                answer: "Jesscia Alba",
                correct: false,
            },
        },

        {
            Question: "Rick Deackard, Han Solo, Indiana Jones, and Jack Ryan, ",
            a: {
                answer: "Harrison Ford",
                correct: true,
            },
            b: {
                answer: "Bill Paxton",
                correct: false,
            },
            c: {
                answer: "Mark Hamill",
                correct: false,
            },
            d: {
                answer: "Dennis Quaid",
                correct: false,
            },
        },

        {
            Question: "Jeri Hogarth, Trinity, Helen Robinson, and Natalie",
            a: {
                answer: "Robin Wright",
                correct: false,
            },
            b: {
                answer: "Naomi Watts",
                correct: false,
            },
            c: {
                answer: "Carrie-Anne Moss",
                correct: true,
            },
            d: {
                answer: "Nicole Kidman",
                correct: false,
            },
        }
    ]

    var start = $(".start");
    var game = $(".gameContainer");
    var button = $("#startButton");
    var end = $("#end");

    var question = $(".question");
    var one = $("#one");
    var two = $("#two");
    var three = $("#three");
    var four = $("#four");

    var number = 30;
    var intervalId;

    var score = 0;
    var currentQA = 0;
    var correctArray = ["Tom Hardy", "Charlize Theron", "Brad Pitt", "Hugo Weaving", "Keira Knightly", "Anne Hathaway", "Harrison Ford", "Carrie-Anne Moss"]
    var answerArray = [];

    start.css("display", "block");
    game.css("display", "none");
    end.css("display", "none");

    function gameStart() {
        start.css("display", "none");
        game.css("display", "block");
        end.css("display", "none");
        displayQA(quest[currentQA]);
    }

    function endGame() {
        start.css("display", "none");
        game.css("display", "none");
        end.css("display", "block");
        tally();
        stop();
    }

    function displayQA(x) {
        question.empty().append(x.Question);
        one.empty().append(x.a.answer);
        one.attr("value", x.a.answer);
        two.empty().append(x.b.answer);
        two.attr("value", x.b.answer);
        three.empty().append(x.c.answer);
        three.attr("value", x.c.answer);
        four.empty().append(x.d.answer);
        four.attr("value", x.d.answer);
        run();
        $("#time").html(number);
    }

    function run() {
        number = 30;
        clearInterval(intervalId);
        intervalId = setInterval(clock, 1000);
    }

    function clock() {
        number--;
        $("#time").html(number);
        if (number == 0) {
            stop();
            answerArray[currentQA] = "";
            currentQA++;
            if (currentQA == 8) {
                endGame();
            } else {
                displayQA(quest[currentQA]);
            }
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function tally() {
        if (correctArray[0] == answerArray[0]) {
            score++;
        }
        for (i = 0; i < correctArray.length - 1; i++) {
            if (correctArray[i] == answerArray[i]) {
                score++;
                console.log(score);
            }
        }
        $("#score").html(score);
    }


    start.on("click", gameStart);

    $(".answer").on("click", function () {
        answerArray[currentQA] = $(this).attr("value");
        currentQA++;
        if (currentQA == 8) {
            endGame();
        } else {
            displayQA(quest[currentQA]);
        }
    })

})