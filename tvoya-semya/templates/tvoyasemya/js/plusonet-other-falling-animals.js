
(plusonet = window.plusonet || []).push(function(){
  
  var start = 1;               /* Запустить скрипт */
  var timeCross = 86400 * 1;   /* На сколько дней исчезнет кот после нажатия на крестик */
  
  var runDesktop = true;       /* ПК */
  var runMobile = false;       /* планшеты и мобильники */
  
  /* НАЧАЛО СКРИПТА */
  if(start != 1){
    return;
  }
  
  var holidays = [];
  for(var i1=1; i1 < 13; i1++){
    holidays[i1] = [];
    for(var i2=1; i2 < 32; i2++){
      holidays[i1][i2] = '';
    }
  }
  
  /* СПИСОК ПРАЗДНИКОВ - ГОСУДАРСТВЕННЫЕ - РОССИЯ */
  /* Январь */
  holidays[1][1] = ["Новый год"];
  holidays[1][7] = ["Рождество Христово"];
  holidays[1][11] = ["День заповедников и национальных парков России"];
  holidays[1][12] = ["День работника прокуратуры Российской Федерации"];
  holidays[1][13] = ["День российской печати"];
  holidays[1][14] = ["Старый Новый год", "День создания трубопроводных войск России"];
  holidays[1][15] = ["День образования Следственного комитета Российской Федерации"];
  holidays[1][19] = ["Крещение Господне"];
  holidays[1][20] = ["День Республики Крым"];
  holidays[1][25] = ["День студентов", "Татьянин день", "День штурмана Военно-Морского Флота России", "Киберпонедельник в России"];
  holidays[1][27] = ["День воинской славы России — День полного освобождения города Ленинграда от блокады (1944 год)", "День памяти жертв Холокоста"];
  holidays[1][31] = ["Международный день ювелира", "День рождения русской водки"];

  /* Февраль */
  holidays[2][2] = ["День воинской славы России — День победы в Сталинградской битве в 1943 году"];
  holidays[2][7] = ["День зимних видов спорта в России"];
  holidays[2][8] = ["День российской науки", "День военного топографа в России"];
  holidays[2][9] = ["День гражданской авиации России"];
  holidays[2][10] = ["День дипломатического работника в России"];
  holidays[2][14] = ["День Святого Валентина (День всех влюбленных)", "Лыжня России"];
  holidays[2][15] = ["День памяти о россиянах, исполнявших служебный долг за пределами Отечества"];
  holidays[2][16] = ["День архива Минэнерго России"];
  holidays[2][17] = ["День Службы горючего Вооруженных Сил России", "Церемония вручения Высшей юридической премии «Фемида»"];
  holidays[2][18] = ["День транспортной полиции России", "День продовольственной и вещевой службы ВС России"];
  holidays[2][21] = ["Международный день родного языка"];
  holidays[2][23] = ["День воинской славы России — День защитника Отечества"];
  holidays[2][27] = ["День Сил специальных операций в России"];

  /* Март */
  holidays[3][1] = ["День Забайкальского края", "День эксперта-криминалиста МВД России", "День хостинг-провайдера в России", "День кошек в России"];
  holidays[3][7] = ["Масленица — начало масленичной недели", "День театрального кассира"];
  holidays[3][8] = ["Международный женский день"];
  holidays[3][10] = ["День архивов в России"];
  holidays[3][11] = ["День народного подвига по формированию Уральского добровольческого танкового корпуса в годы Великой Отечественной войны", "День работника органов наркоконтроля России", "День сотрудников частных охранных агентств в России"];
  holidays[3][12] = ["День работников уголовно-исполнительной системы Министерства юстиции России"];
  holidays[3][13] = ["Прощеное воскресенье", "День работников геодезии и картографии в России"];
  holidays[3][16] = ["День образования подразделений экономической безопасности в системе МВД России"];
  holidays[3][18] = ["День воссоединения Крыма с Россией"];
  holidays[3][19] = ["День моряка-подводника в России"];
  holidays[3][20] = ["День работников бытового обслуживания населения и жилищно-коммунального хозяйства в России"];
  holidays[3][22] = ["Всемирный день водных ресурсов"];
  holidays[3][23] = ["День работников гидрометеорологической службы России"];
  holidays[3][24] = ["День штурманской службы ВВС России"];
  holidays[3][25] = ["День работника культуры России"];
  holidays[3][27] = ["Всемирный день театра", "День внутренних войск МВД России"];
  holidays[3][29] = ["День специалиста юридической службы в Вооруженных Силах России"];

  /* Апрель */
  holidays[4][1] = ["День смеха (День дурака)"];
  holidays[4][2] = ["День единения народов Беларуси и России"];
  holidays[4][5] = ["День принятия Степного Уложения (Конституции) Республики Калмыкия"];
  holidays[4][6] = ["День работников следственных органов МВД России"];
  holidays[4][7] = ["День рождения Рунета", "День памяти погибших подводников"];
  holidays[4][8] = ["День российской анимации", "День сотрудников военных комиссариатов в России"];
  holidays[4][10] = ["День войск противовоздушной обороны (День войск ПВО) России"];
  holidays[4][11] = ["День Конституции Республики Крым"];
  holidays[4][12] = ["День космонавтики"];
  holidays[4][13] = ["День мецената и благотворителя в России"];
  holidays[4][15] = ["День специалиста по радиоэлектронной борьбе Вооруженных сил России"];
  holidays[4][16] = ["Весенняя Неделя Добра"];
  holidays[4][17] = ["День ветеранов органов внутренних дел и внутренних войск МВД России"];
  holidays[4][18] = ["Международный день памятников и исторических мест", "День воинской славы России — Ледовое побоище (1242)"];
  holidays[4][19] = ["День работника ломоперерабатывающей отрасли России"];
  holidays[4][20] = ["Национальный день донора в России"];
  holidays[4][21] = ["День Главбуха (День главного бухгалтера) в России", "День местного самоуправления в России"];
  holidays[4][26] = ["День участников ликвидации последствий радиационных аварий и катастроф и памяти жертв этих аварий и катастроф"];
  holidays[4][27] = ["День российского парламентаризма", "День образования Республики Саха (Якутия)", "День спецчастей Внутренних войск МВД России", "День нотариата в России"];
  holidays[4][28] = ["День борьбы за права человека от химической опасности (День химической безопасности)"];
  holidays[4][30] = ["День пожарной охраны России"];

  /* Май */
  holidays[5][1] = ["Праздник Весны и Труда", "Пасха"];
  holidays[5][5] = ["День водолаза в России", "День шифровальщика в России"];
  holidays[5][6] = ["День святого Георгия Победоносца"];
  holidays[5][7] = ["День радио", "День создания вооруженных сил России"];
  holidays[5][8] = ["День работников Федеральной службы по военно-техническому сотрудничеству России", "День оперативного работника уголовно-исполнительной системы России"];
  holidays[5][9] = ["День воинской славы России — День Победы советского народа в Великой Отечественной войне 1941—1945 годов (1945)"];
  holidays[5][13] = ["День Черноморского флота ВМФ России", "День охранно-конвойной службы МВД России (День конвоира)"];
  holidays[5][14] = ["День фрилансера в России", "Всероссийский день посадки леса"];
  holidays[5][15] = ["Единые дни действий в защиту малых рек и водоемов"];
  holidays[5][18] = ["Международный день музеев", "День Балтийского флота ВМФ России"];
  holidays[5][20] = ["День Волги"];
  holidays[5][21] = ["День Ставропольского края", "День Тихоокеанского флота ВМФ России", "День калмыцкого чая", "День военного переводчика в России", "День полярника в России", "День инвентаризатора (День работника БТИ)"];
  holidays[5][24] = ["День славянской письменности и культуры", "День кадровика в России"];
  holidays[5][25] = ["День филолога", "День Нерпенка"];
  holidays[5][26] = ["День российского предпринимательства", "День снежного барса на Алтае"];
  holidays[5][27] = ["Всероссийский день библиотек (День библиотекаря)", "День сварщика в России"];
  holidays[5][28] = ["День пограничника", "День оптимизатора Рунета"];
  holidays[5][29] = ["День военного автомобилиста Вооруженных сил России", "День ветеранов таможенной службы России", "День химика"];
  holidays[5][31] = ["День российской адвокатуры"];

  /* Июнь */
  holidays[6][1] = ["Международный день защиты детей", "День Северного флота ВМФ России", "День создания правительственной связи России"];
  holidays[6][2] = ["День здорового питания и отказа от излишеств в еде"];
  holidays[6][4] = ["День поэзии, посвященный памяти и творчеству Федора Тютчева в Брянской области"];
  holidays[6][5] = ["День эколога", "День создания Государственной службы карантина растений в России", "День мелиоратора в России"];
  holidays[6][6] = ["Пушкинский день России (День русского языка)"];
  holidays[6][7] = ["День краудфандинга"];
  holidays[6][8] = ["День Республики Карелия", "День социального работника в России", "Всемирный день петербургских кошек и котов"];
  holidays[6][9] = ["День группы советских войск в Германии (День ГСВГ)"];
  holidays[6][10] = ["Международный фестиваль «Императорские сады России»"];
  holidays[6][11] = ["День пивовара в России", "День мебельщика в России"];
  holidays[6][12] = ["День России", "День работников текстильной и легкой промышленности"];
  holidays[6][14] = ["День работников миграционной службы России"];
  holidays[6][15] = ["День создания юннатского движения в России"];
  holidays[6][19] = ["День медицинского работника"];
  holidays[6][20] = ["День специалиста минно-торпедной службы ВМФ России"];
  holidays[6][21] = ["День кинологических подразделений МВД России (День кинолога)"];
  holidays[6][22] = ["День памяти и скорби — день начала Великой Отечественной войны (1941 год)"];
  holidays[6][23] = ["День балалайки — международный праздник музыкантов-народников", "Московский Международный Кинофестиваль"];
  holidays[6][24] = ["День Республики Чувашия"];
  holidays[6][25] = ["День изобретателя и рационализатора в России"];
  holidays[6][27] = ["День молодежи России"];
  holidays[6][29] = ["День партизан и подпольщиков в России"];
  holidays[6][30] = ["День сотрудника службы охраны уголовно-исполнительной системы Министерства юстиции России"];

  /* Июль */
  holidays[7][1] = ["День празднования добровольного вхождения Бурятии в состав Российского государства"];
  holidays[7][3] = ["День ГАИ России (День ГИБДД МВД РФ)", "День работников морского и речного флота России", "День образования Республики Алтай", "День Республики Хакасия"];
  holidays[7][7] = ["День воинской славы России — День победы русского флота над турецким флотом в Чесменском сражении (1770 год)", "Иван Купала"];
  holidays[7][8] = ["Всероссийский день семьи, любви и верности"];
  holidays[7][9] = ["Фестиваль «Вятский лапоть»"];
  holidays[7][10] = ["День воинской славы России — День победы русской армии в Полтавской битве (1709)", "День рыбака в России", "День действий против рыбной ловли в России", "День российской почты"];
  holidays[7][11] = ["День художника по свету (День светооператора)"];
  holidays[7][15] = ["Фестиваль авторской песни «Гринландия»"];
  holidays[7][17] = ["День основания морской авиации ВМФ России", "День металлурга"];
  holidays[7][18] = ["День создания органов государственного пожарного надзора в России"];
  holidays[7][19] = ["День юридической службы Министерства внутренних дел РФ"];
  holidays[7][23] = ["День работников торговли в России"];
  holidays[7][24] = ["День кадастрового инженера в России"];
  holidays[7][25] = ["День сотрудника органов следствия Российской Федерации", "День речной полиции в России"];
  holidays[7][26] = ["День парашютиста"];
  holidays[7][28] = ["День Крещения Руси", "День PR-специалиста в России"];
  holidays[7][29] = ["День системного администратора"];
  holidays[7][31] = ["День Военно-морского флота России"];

  /* Август */
  holidays[8][1] = ["День тыла Вооруженных Сил России", "День образования Службы специальной связи России", "Всероссийский день инкассатора"];
  holidays[8][2] = ["День воздушно-десантных войск (День ВДВ)"];
  holidays[8][6] = ["День железнодорожных войск России"];
  holidays[8][7] = ["День специальной связи и информации Федеральной службы охраны России", "День железнодорожника в России"];
  holidays[8][9] = ["День воинской славы России — победа у мыса Гангут (1714)"];
  holidays[8][12] = ["День Военно-воздушных сил (День ВВС) России"];
  holidays[8][13] = ["День физкультурника в России"];
  holidays[8][14] = ["День строителя"];
  holidays[8][15] = ["День Республики Тыва (День Тувы)"];
  holidays[8][19] = ["День рождения русской тельняшки"];
  holidays[8][21] = ["День Воздушного Флота России"];
  holidays[8][22] = ["День Государственного флага Российской Федерации", "День Республики Коми"];
  holidays[8][23] = ["День воинской славы России — День победы советских войск в Курской битве (1943)"];
  holidays[8][27] = ["День российского кино", "Международный военно-музыкальный фестиваль «Спасская башня»"];
  holidays[8][28] = ["День шахтера в России"];
  holidays[8][30] = ["День образования Республики Татарстан"];

  /* Сентябрь */
  holidays[9][1] = ["День знаний", "День государственности Кабардино-Балкарской Республики"];
  holidays[9][2] = ["День воинской славы — День окончания Второй мировой войны (1945 год)", "День российской гвардии", "День патрульно-постовой службы полиции"];
  holidays[9][3] = ["День солидарности в борьбе с терроризмом"];
  holidays[9][4] = ["День специалиста по ядерному обеспечению России", "День работников нефтяной, газовой и топливной промышленности"];
  holidays[9][8] = ["День воинской славы России — День Бородинского сражения (1812 год)", "День финансиста в России", "День Новороссийского военно-морского района"];
  holidays[9][9] = ["День тестировщика в России", "День дизайнера-графика в России", "День памяти русских воинов, павших при обороне Севастополя и в Крымской войне 1853-1856 годов"];
  holidays[9][11] = ["Всероссийский День Трезвости", "День танкиста в России", "День воинской славы России — День победы русской эскадры у мыса Тендра (1790)", "День специалиста органов воспитательной работы Вооруженных Сил России", "День озера Байкал", "День граненого стакана"];
  holidays[9][12] = ["День программиста в России ", "Международная неделя слингоношения"];
  holidays[9][13] = ["День парикмахера в России"];
  holidays[9][15] = ["День единства народов Дагестана", "Российские дни леса"];
  holidays[9][16] = ["День секретаря в России"];
  holidays[9][18] = ["День работника леса"];
  holidays[9][19] = ["День оружейника в России"];
  holidays[9][20] = ["День рекрутера в России"];
  holidays[9][21] = ["День воинской славы России — День победы русских полков в Куликовской битве (1380 год)", "День HR-менеджера в России"];
  holidays[9][25] = ["День машиностроителя в России", "День тигра на Дальнем Востоке"];
  holidays[9][27] = ["День воспитателя и всех дошкольных работников в России"];
  holidays[9][28] = ["День работника атомной промышленности в России", "День Деловой книги в России", "День генерального директора в России"];
  holidays[9][29] = ["День отоларинголога"];
  holidays[9][30] = ["День интернета в России"];

  /* Октябрь */
  holidays[10][1] = ["Международный день пожилых людей в России", "День Сухопутных войск России"];
  holidays[10][3] = ["День ОМОНа в России"];
  holidays[10][4] = ["День Космических войск", "День гражданской обороны МЧС России"];
  holidays[10][5] = ["День учителя в России", "День образования Республики Адыгея", "День работников уголовного розыска России"];
  holidays[10][6] = ["День российского страховщика"];
  holidays[10][7] = ["День образования штабных подразделений МВД России"];
  holidays[10][8] = ["День командира надводного, подводного и воздушного корабля ВМФ России"];
  holidays[10][9] = ["День работника сельского хозяйства и перерабатывающей промышленности в России"];
  holidays[10][11] = ["День Республики Башкортостан"];
  holidays[10][12] = ["День кадрового работника в России"];
  holidays[10][14] = ["День работников заповедного дела"];
  holidays[10][15] = ["День создания адресно-справочной службы Российского государства"];
  holidays[10][16] = ["День работников пищевой промышленности России", "День работников дорожного хозяйства в России"];
  holidays[10][19] = ["Всероссийский день лицеиста"];
  holidays[10][20] = ["День военного связиста в России"];
  holidays[10][22] = ["Литературный праздник «Белые журавли»"];
  holidays[10][23] = ["День работников рекламы в России"];
  holidays[10][24] = ["День подразделений специального назначения Вооруженных Сил России"];
  holidays[10][25] = ["День Приморского края", "День таможенника Российской Федерации", "День работника кабельной промышленности в России"];
  holidays[10][28] = ["День создания армейской авиации России"];
  holidays[10][29] = ["День работников службы вневедомственной охраны МВД РФ", "Всероссийский день гимнастики"];
  holidays[10][30] = ["День основания Российского военно-морского флота", "День автомобилиста", "День инженера-механика в России", "День памяти жертв политических репрессий"];
  holidays[10][31] = ["День сурдопереводчика в России", "День работников СИЗО и тюрем в России"];

  /* Ноябрь */
  holidays[11][1] = ["День судебного пристава в России"];
  holidays[11][4] = ["День воинской славы России — День народного единства"];
  holidays[11][5] = ["День военного разведчика в России"];
  holidays[11][7] = ["День воинской славы России — День проведения военного парада на Красной площади в 1941 году", "День Октябрьской революции 1917 года"];
  holidays[11][8] = ["День памяти погибших при исполнении служебных обязанностей сотрудников органов внутренних дел и военнослужащих внутренних войск МВД России"];
  holidays[11][10] = ["День сотрудника органов внутренних дел Российской Федерации"];
  holidays[11][11] = ["День работника восстановительного поезда в России", "День памяти (Окончание Первой мировой войны)"];
  holidays[11][12] = ["День работников Сбербанка России", "День специалиста по безопасности в России"];
  holidays[11][13] = ["День войск радиационной, химической и биологической защиты России"];
  holidays[11][14] = ["День социолога в России"];
  holidays[11][15] = ["Всероссийский день призывника", "День создания подразделений по борьбе с организованной преступностью в России"];
  holidays[11][16] = ["Всероссийский день проектировщика"];
  holidays[11][17] = ["День участковых уполномоченных полиции (День участкового) в России"];
  holidays[11][18] = ["День рождения Деда Мороза"];
  holidays[11][19] = ["День ракетных войск и артиллерии в России", "День работника стекольной промышленности России"];
  holidays[11][21] = ["День работника налоговых органов Российской Федерации", "День бухгалтера в России"];
  holidays[11][22] = ["День психолога в России"];
  holidays[11][24] = ["День моржа"];
  holidays[11][27] = ["День матери в России", "День морской пехоты России", "День оценщика в России"];

  /* Декабрь */
  holidays[12][1] = ["Всемирный день борьбы со СПИДом", "День воинской славы России — День победы русской эскадры у мыса Синоп", "Всероссийский день хоккея"];
  holidays[12][2] = ["День банковского работника России"];
  holidays[12][3] = ["День Неизвестного Солдата в России", "Международный день инвалидов", "День юриста в России"];
  holidays[12][4] = ["День информатики в России", "День Пермского края", "День сетевика в России"];
  holidays[12][5] = ["День воинской славы России — День начала контрнаступления советских войск в битве под Москвой в 1941 году"];
  holidays[12][8] = ["День образования российского казначейства"];
  holidays[12][9] = ["День Героев Отечества в России", "День ведомственной охраны железнодорожного транспорта России"];
  holidays[12][10] = ["День создания службы связи МВД России"];
  holidays[12][12] = ["День Конституции Российской Федерации"];
  holidays[12][15] = ["День памяти журналистов, погибших при исполнении профессиональных обязанностей"];
  holidays[12][17] = ["День ракетных войск стратегического назначения Вооруженных Сил России", "День сотрудников Государственной фельдъегерской службы России", "День риэлтора в России"];
  holidays[12][18] = ["День работников органов ЗАГСа в России", "День подразделений собственной безопасности органов внутренних дел РФ"];
  holidays[12][19] = ["День военной контрразведки в России", "День снабженца в России"];
  holidays[12][20] = ["День работника органов государственной безопасности РФ (День ФСБ)"];
  holidays[12][22] = ["День энергетика в России", "День образования Пенсионного фонда России"];
  holidays[12][23] = ["День дальней авиации ВВС России"];
  holidays[12][24] = ["День воинской славы России — День взятия турецкой крепости Измаил"];
  holidays[12][27] = ["День спасателя в России"];
  
  var date = new Date();
  var date_day = date.getDate();
  var date_month = date.getMonth() + 1;
  
  var needHoliday = holidays[date_month][date_day];
  if(needHoliday == "") {
    return;
  }
  
  if(plusonet.browser.desktop && !runDesktop){
    return;
  }
  if(plusonet.browser.mobile && !runMobile){
    return;
  }
  
  var shbType = 'other';
  var shbName = 'falling-animals';
  
  if(plusonet.check.get(shbType + ';' + shbName)){
    return false;
  }
  
  plusonet.js("//cdn-library.su/plusonet/img/canvas-engine-v1.js");
  var i1=0;
  var interval1 = setInterval(function(){
    i1++;
    if(i1 > 100){
      clearInterval(interval1);
    }
    if(typeof plusonetCatBox != "function"){
      return;
    }
    clearInterval(interval1);
    
    run();
  }, 100);
  
  
  function run(){
    
    var gElem = document.createElement("div");
    gElem.setAttribute('class', "plusonet-");
    gElem.setAttribute("data-type", shbType);
    gElem.setAttribute("data-name", shbName);
    document.body.appendChild(gElem);
    plusonet.addEvent(gElem, function(data){
      plusonet.check.set(shbType + ';' + shbName, timeCross, "site");
      console.log("asdasd", data);
    });
    
    plusonet.style('#plusonet-tpl-other-cats-v1-canvas{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:9000}.plusonet-tpl-other-cats-v1{position:fixed;right:15%;bottom:-160px;transition-duration:1s;z-index:8000;visibility:hidden}.plusonet-tpl-other-cats-v1 .plusonet-hero{width:150px;height:150px;background-image:url(//cdn-library.su/plusonet/img/cats/cat2.png);cursor:pointer}.plusonet-tpl-other-cats-v1.plusonet-show{transition-duration:2s;bottom:-53px;visibility:visible}.plusonet-tpl-other-cats-v1 .plusonet-btn{position:absolute;border-radius:100%;border:1px solid #000;text-align:center;background:#fff;cursor:pointer;box-shadow:-1px -1px 1px rgba(0,0,0,.5);z-index:10;transition:.3s;visibility:visible;opacity:1}.plusonet-tpl-other-cats-v1 .plusonet-cross{top:-5px;right:-10px;font-size:18px;width:20px;height:20px;line-height:18px}.plusonet-tpl-other-cats-v1 .plusonet-info{top:24px;right:-7px;font-size:8px;width:14px;height:14px;line-height:14px;text-decoration:none}.plusonet-tpl-other-cats-v1:not(:hover) .plusonet-btn{transition:1s;visibility:hidden;opacity:0}.plusonet-tpl-other-cats-v1 .plusonet-cloud{display:table;position:absolute;bottom:142px;left:2px;z-index:8;width:200px;height:155px;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLQodC70L7QuV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIwOSAxNjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwOSAxNjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBzdHlsZT0iZmlsbDojZmZmO3N0cm9rZTojMDA3M0U0O3N0cm9rZS13aWR0aDozOyIgZD0iTTEwMy41LDMuOWMtNTEsNC04Ny44LDI0LjktOTguNCw1NS43Yy0yLjIsNi4yLTIuNSw4LjctMi4yLDE2LjJjMC43LDE4LjcsMTEuMSwzNC43LDMwLjksNDcuNCBjNi4zLDQuMSwzMC4zLDEzLjMsMzAuMywxMy4zbDAsMGMxLjEsMS4zLDQuMSwxNC4zLDQuMiwyMi44YzEwLjItNS44LDEyLjMtOS42LDE4LjMtMTguMmwwLDBoMTMuN2M1My42LDAsOTQuNC0yMSwxMDMuNy01My41IGMyLjctOS4zLDEuMS0yNi0zLjUtMzYuM2MtMC41LTEuMS01LTEwLjctNS0xMC43Yy02LjgtMTEuMy0xNC4xLTE2LjctMTQuMS0xNi43QzE2Mi43LDguMSwxMzYuMywxLjQsMTAzLjUsMy45eiIvPjwvc3ZnPg==);background-size:100% 100%;transition-duration:.5s;visibility:hidden;opacity:0}.plusonet-tpl-other-cats-v1 .plusonet-cloud.plusonet-size1{width:284px;height:220px;left:-25px}.plusonet-tpl-other-cats-v1 .plusonet-cloud .plusonet-td{display:table-cell;vertical-align:middle;padding-bottom:20px}.plusonet-tpl-other-cats-v1 .plusonet-cloud .plusonet-text{overflow:hidden;text-align:center;font-size:18px;color:#0086C3;max-height:90px;padding:0 10px}.plusonet-tpl-other-cats-v1 .plusonet-cloud.plusonet-size1 .plusonet-text{max-height:110px}.plusonet-tpl-other-cats-v1 .plusonet-cloud.plusonet-size2 .plusonet-text{font-weight:700;font-size:12px;max-height:135px}');
    
    gElem.innerHTML = '<div class="plusonet-tpl-other-cats-v1 plusonet-css-global"><div class="plusonet-hero"></div><div class="plusonet-btn plusonet-cross" title="Close">×</div><a class="plusonet-btn plusonet-info" href="https://pluso.net/gallery/other/falling-animals/" target="_blank" title="By pluso.net">i</a><div class="plusonet-cloud"><div class="plusonet-td"><div class="plusonet-text"></div></div></div></div>';

    gElem.querySelector(".plusonet-hero").onclick = function(){
      canvasRun();
    }
    
    gElem.querySelector(".plusonet-cross").onclick = function(){
      plusonet.trigger.auto(this, 'other', 'cross');
      
      gElem.querySelector(".plusonet-tpl-other-cats-v1").classList.remove("plusonet-show");
      setTimeout(function(){
        gElem.parentElement.removeChild(gElem);
      }, 2000);
      
    }
    
    setTimeout(function(){
      gElem.querySelector(".plusonet-tpl-other-cats-v1").classList.add("plusonet-show");
    }, 1000);
    
    setTimeout(function(){
      if(plusonet.check.get(shbType + ';' + shbName + ";cloud-holiday")){
        return false;
      }
      
      var rand = Math.floor(Math.random() * needHoliday.length);
      var text = "Привет!<br> Прими поздравления от сайта ТвояСемья. Сегодня " + needHoliday[rand] + "<br>Нажми на меня.";
      if(text.length > 60) {
         gElem.querySelector(".plusonet-cloud").classList.add("plusonet-size1");
      }
      if(text.length > 100) {
         gElem.querySelector(".plusonet-cloud").classList.add("plusonet-size2");
      }
      if(text.length > 160) {
         gElem.querySelector(".plusonet-cloud").classList.add("plusonet-size3");
      }
      gElem.querySelector(".plusonet-cloud .plusonet-text").innerHTML = text;
      gElem.querySelector(".plusonet-cloud").style.visibility = "visible";
      gElem.querySelector(".plusonet-cloud").style.opacity = "1";
    }, 2500);
    
    
    var canvasRun = function(){
      var pics = {
        animals: [{
          image: '//cdn-library.su/plusonet/img/cats/raccoon.png',
          width: 180,
          height: 130
        }, {
          image: '//cdn-library.su/plusonet/img/cats/fox.png',
          width: 180,
          height: 130
        }, {
          image: '//cdn-library.su/plusonet/img/cats/cat.png',
          width: 180,
          height: 130
        }, {
          image: '//cdn-library.su/plusonet/img/cats/bear.png',
          width: 155,
          height: 130
        }, {
          image: '//cdn-library.su/plusonet/img/cats/duck.png',
          width: 155,
          height: 130
        }, {
          image: '//cdn-library.su/plusonet/img/cats/panda.png',
          width: 155,
          height: 130
        }, {
          image: '//cdn-library.su/plusonet/img/cats/bear2.png',
          width: 155,
          height: 130
        }, {
          image: '//cdn-library.su/plusonet/img/cats/owl.png',
          width: 155,
          height: 130

        }],

        april: {
          image: '//cdn-library.su/plusonet/img/cats/raccoon-cloud4.png',
          width: 100,
          height: 100,
          offsetX: -0.24,
          offsetY: 0.26
        },
        share: {
          image: '//cdn-library.su/plusonet/img/cats/owl-share3.png',
          width: 200,
          height: 168,
          btnOffset: {x: 0, y: 0},
          btnSize: 200,
          btnGutter: 6,
          btnOrder: ['share']
        }
      }
      
      
      window.box = new plusonetCatBox({
        pixelRatio: 1,
        wallSize: 500,
        debug: false,
        gravity: 1,
        onClickToShare: function(id) {
          if(plusonet.mw.html == ""){
            return;
          }
          
          plusonet.mw.time.open = 100;
          setTimeout(function(){
            plusonet.mw.run(1); // Запуск скрипта
          }, 10);
          
        },
        beforeCreate: function() {
          if(plusonet.mw.html == ""){
            plusonet.js("//cdn-library.su/plusonet/lib/files/276.js");
          }
          gElem.querySelector(".plusonet-tpl-other-cats-v1").classList.remove("plusonet-show");
          
          plusonet.check.set(shbType + ';' + shbName + ';cloud-holiday', 86400, "site");
          gElem.querySelector(".plusonet-cloud").style.visibility = "hidden";
          gElem.querySelector(".plusonet-cloud").style.opacity = "0";
        },
        afterRemove: function() {
          setTimeout(function() {
            this.canvas.remove();
            gElem.querySelector(".plusonet-tpl-other-cats-v1").classList.add("plusonet-show");
          }.bind(this), 1500);
        }
      });
      box.init('plusonet-tpl-other-cats-v1-canvas');
      box.fillCats(pics);
      
      
      window.addEventListener("resize", function(){
        box.resize();
      });
      window.addEventListener("orientationchange", function(){
        box.resize();
      });
    }
  }
});