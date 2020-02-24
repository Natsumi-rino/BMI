//体重の数値を得る
let weight = prompt('BMIを測定します。まずはあなたの体重を入力してください');
//慎重の数値を測る
let height = prompt('BMIを測定します。次にあなたの慎重を入力してください');
//体重と慎重からBMIを計算して、警告ダイアログに表示する
let bmi = weight / (height * height);
let msg = 'あなたのBMIは「' + bmi + '」です。';
alert(msg);