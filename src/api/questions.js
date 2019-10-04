var quizQuestions = [
    {
      question: "What is your current annual income range?",
      answerindex : 1,
      answers: [
        {
          type: "",
          content: "$0 to $30,000",
          answer : false,
          riskWeight: 0
        },
        {
          type: "",
          content: "$30,000 to $60,000",
          answer : false,
          riskWeight: 0
        },
        {
          type: "",
          content: "$60,000 to $90,000",
          answer : false,
          riskWeight: 0
        },
        {
          type: "",
          content: "Above $90,000",
          answer : false,
          riskWeight: 0
        }
      ]
    },
    {
      question: "How much of your monthly disposable income do you put towards investments?",
      answerindex : 1,
      answers: [
        {
          type: "",
          content: "0% to 25%",
          answer : false,
          riskWeight: 0
        },
        {
          type: "",
          content: "26% to 50%",
          answer : false,
          riskWeight: 0
        },
        {
          type: "",
          content: "51% to 75%",
          answer : false,
          riskWeight: 0
        },
        {
          type: "",
          content: "76% to 100%",
          answer : false,
          riskWeight: 0
        }
      ]
    },
    {
      question: "Which of these statements on financial matters do you most identify with?",
      answerindex : 1,
      answers: [
        {
          type: "",
          content: "I’m not sure how and where I should invest my money.",
          answer : false,
          riskWeight: 1
        },
        {
          type: "",
          content: "I don’t think I miss out money-making opportunities but I’m always looking for investment ideas.",
          answer : false,
          riskWeight: 2
        },
        {
          type: "",
          content: "I need to spend time understanding any potential investment, but I will be very willing to invest if I believe in its value.",
          answer : false,
          riskWeight: 3
        },
        {
          type: "",
          content: "I’m always looking to invest in something.",
          answer : false,
          riskWeight: 4
        }
      ]
    },
    {
      question: "Can you confidently define financial terms like PE ratio, market cap, and dividend?",
      answerindex : 1,
      answers: [
        {
          type: "",
          content: "Sure I can! Want me to do that right now?",
          answer : false,
          riskWeight: 1
        },
        {
          type: "",
          content: "I believe I understand my investments well enough to make good decisions.",
          answer : false,
          riskWeight: 2
        },
        {
          type: "",
          content: "I somewhat know what they mean, and I think that is good enough for me.",
          answer : false,
          riskWeight: 3
        },
        {
          type: "",
          content: "No, I'm not sure.",
          answer : false,
          riskWeight: 4
        }
      ]
    },
    {
      question: "How comfortable do you feel about being hands-off and giving up control over investment products?",
      answerindex : 1,
      answers: [
        {
          type: "",
          content: "Not comfortable at all.",
          answer : false,
          riskWeight: 1
        },
        {
          type: "",
          content: "I may give up some, but not most of the control over my investments.",
          answer : false,
          riskWeight: 2
        },
        {
          type: "",
          content: "If the products are offered by reputable financial institutitons, I will place my trust in them and invest.",
          answer : false,
          riskWeight: 3
        },
        {
          type: "",
          content: "Absolutely! I trust that the products will perform as described.",
          answer : false,
          riskWeight: 4
        }
      ]
    },
    {
      question: "How much volatility can you handle when it comes to your investments?",
      answerindex : 1,
      answers: [
        {
          type: "",
          content: "I wouldn’t invest in anything with the slightest hint of volatility.",
          answer : false,
          riskWeight: 1
        },
        {
          type: "",
          content: "I can handle volatility – without risk there's no gain.",
          answer : false,
          riskWeight: 2
        },
        {
          type: "",
          content: "I’m willing to accept some ups and downs over the long term, as long as I don’t lose too much money.",
          answer : false,
          riskWeight: 3
        },
        {
          type: "",
          content: "High risk high reward baby.",
          answer : false,
          riskWeight: 4
        }
      ]
    },
    {
      question: "How much information do you need to make buy, sell or hold decisions for your investments?",
      answerindex : 1,
      answers: [
        {
          type: "",
          content: "I have not / will not want to make such decisions.",
          answer : false,
          riskWeight: 1
        },
        {
          type: "",
          content: "I constantly keep myself up to date with the latest financial news and company updates to help facilitate my decisions.",
          answer : false,
          riskWeight: 2
        },
        {
          type: "",
          content: "I do my due dilligence as much as I can before taking the plunge, but sometimes I prefer to consult my friends or go with my gut.",
          answer : false,
          riskWeight: 3
        },
        {
          type: "",
          content: "Just enough will do, and then I will go with my intuition. High risk high reward baby.",
          answer : false,
          riskWeight: 4
        }
      ]
    },
    {
        question: "How would you best describe your current investment situation?",
        answerindex : 1,
        answers: [
          {
            type: "",
            content: "My main focus has only been on savings, and I would like to start investing now.",
            answer : false,
            riskWeight: 1
          },
          {
            type: "",
            content: "I prefer traditional savings types such as time deposits and government bonds due to their relatively low risk.",
            answer : false,
            riskWeight: 2
          },
          {
            type: "",
            content: "I would diversify my savings into a mix of low- and high-risk investments to mitigate risks.",
            answer : false,
            riskWeight: 3
          },
          {
            type: "",
            content: "Whatever it takes to reap high returns. High risk high reward baby.",
            answer : false,
            riskWeight: 4
          }
        ]
      } 
  ];
  
  export default quizQuestions;