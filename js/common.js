$(function(){


    var aryQuiz = [];
    aryQuiz.push(
        {
            question : '第1問．「自転車」は名古屋弁でなんと言う？',
            answer : 'ケッタマシン'
        }
        ,{
            question : '第2問．「とても」は名古屋弁でなんと言う？',
            answer : 'でら'
        }
        ,{
            question : '第3問．「体がだるいこと」は名古屋弁でなんと言う？',
            answer : '体がえらい'
        }
        ,{
            question : '第4問．名古屋弁で「ちんちん」とは何を表す？',
            answer : '熱い'
        }
        ,{
            question : '第5問．名古屋弁で「ねぶる」とは何を表す？',
            answer : '舐める'
        }
        ,{
            question : '第6問．名古屋のところてんの食べ方は？',
            answer : 'はし一本で食べる'
        }
    );


        console.log(aryQuiz[1]); 




    // 解答の設定
    var thisanswer = 1;

    console.log(thisanswer);

    $(".choicearea > p").css("background-color",""); //選択肢の色がグレーになっている場合があるので元に戻す


    // 選択肢1を押した時のアクション
    $(".choices1").off("click");
    $(".choices1").on("click",function(){
        var yourvalue = 1;
        console.log(yourvalue);

        if(thisanswer == yourvalue){
            // alert("正解");
            console.log("正解")
            $(".result").html('<img src="img/img_OK.png" alt="画像" />');
        }else{
            // alert("不正解");
            console.log("不正解")
            $(".result").html('<img src="img/img_NG.png" alt="画像" />');
            $(".choices1").css("background-color","#c0c0c0");
        }

    });

    // 選択肢2を押した時のアクション
    $(".choices2").off("click");
    $(".choices2").on("click",function(){
        var yourvalue = 2;
        console.log(yourvalue);
    
        if(thisanswer == yourvalue){
            // alert("正解");
            console.log("正解")
            $(".result").html('<img src="img/img_OK.png" alt="画像" />');
        }else{
            // alert("不正解");
            console.log("不正解")
            $(".result").html('<img src="img/img_NG.png" alt="画像" />');
            $(".choices2").css("background-color","#c0c0c0");
        }

    
    });

    // 選択肢3を押した時のアクション
    $(".choices3").off("click");
    $(".choices3").on("click",function(){
        var yourvalue = 3;
        console.log(yourvalue);
        
        if(thisanswer == yourvalue){
            // alert("正解");
            console.log("正解")
            $(".result").html('<img src="img/img_OK.png" alt="画像" />');
        }else{
            // alert("不正解");
            console.log("不正解")
            $(".result").html('<img src="img/img_NG.png" alt="画像" />');
            $(".choices3").css("background-color","#c0c0c0");
        }

        
    });
        
    // 選択肢4を押した時のアクション
    $(".choices4").off("click");
    $(".choices4").on("click",function(){
        var yourvalue = 4;
        console.log(yourvalue);
        
        if(thisanswer == yourvalue){
            // alert("正解");
            console.log("正解")
            $(".result").html('<img src="img/img_OK.png" alt="画像" />');
        }else{
            // alert("不正解");
            console.log("不正解")
            $(".result").html('<img src="img/img_NG.png" alt="画像" />');
            $(".choices4").css("background-color","#c0c0c0");
        }

        
    });





});
