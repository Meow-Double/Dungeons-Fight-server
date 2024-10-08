const sequelize = require('../db');
const { DataTypes } = require('sequelize');

// const User = sequelize.define('user', {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   email: { type: DataTypes.STRING, unique: true },
//   password: { type: DataTypes.STRING },
//   avatarUrl: { type: DataTypes.STRING, defaultValue: '' },
// });

const Dungeons = sequelize.define('dungeons', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING},
  type: { type: DataTypes.STRING },
  desc: { type: DataTypes.TEXT },
  'time-open': { type: DataTypes.STRING },
  difficulty: { type: DataTypes.INTEGER },
  'award-percents': { type: DataTypes.INTEGER },
  award: { type: DataTypes.ARRAY(DataTypes.STRING) },
  'number-items': { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  banerImg: { type: DataTypes.STRING },
  new: { type: DataTypes.BOOLEAN },
});

// const Award = sequelize.define('award', {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   count: { type: DataTypes.INTEGER, allowNull: false },
// });

// const Thing = sequelize.define('thing', {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   title: { type: DataTypes.STRING, unique: true },
//   type: { type: DataTypes.STRING, allowNull: true },
//   desc: { type: DataTypes.STRING, allowNull: true },
//   img: { type: DataTypes.STRING, allowNull: true },
//   price: { type: DataTypes.INTEGER, allowNull: true },
//   chance: { type: DataTypes.INTEGER, allowNull: true },
// });

// const Bag = sequelize.define('bag', {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   bag: { type: DataTypes.ARRAY(DataTypes.JSON), defaultValue: [] },
// });
// // ------------------links
// User.hasOne(Bag);
// Bag.belongsTo(User);

// User.hasMany(Award);
// Award.belongsTo(User);

// Bag.hasMany(Award);
// Award.belongsTo(Bag);

// Award.hasMany(Thing);
// Thing.belongsTo(Award);

module.exports = {
  // User,
  Dungeons,
  // Award,
  // Thing,
  // Bag,
};

const data = [
  {
    title: 'Пиратский сквер',
    type: 'Подземелье',
    desc: 'В самом сердце заброшенного острова, скрытого от посторонних глаз, находится Пиратский сквер. Это место, окутанное тайнами и легендами, когда-то служило убежищем для самых грозных пиратов семи морей. Теперь же оно превратилось в опасное подземелье, полное ловушек и сокровищ. Сквозь густую листву пробиваются лучи солнца, освещая старые деревянные постройки и полуразрушенные корабли, застрявшие в песках времени. В воздухе витает запах соли и пороха, а эхо шагов разносится по пустым улицам, где когда-то кипела жизнь. На каждом углу поджидают опасности: от хитроумных ловушек до призраков давно погибших пиратов, охраняющих свои несметные богатства. Только самые смелые и умелые авантюристы смогут пройти через все испытания Пиратского сквера и выйти с сокровищами, о которых ходят легенды.',
    'time-open': '9:00-18:00',
    difficulty: 3,
    'award-percents': 70,
    award: ['1', '2', '3'],
    'number-items': '0-3',
    img: '',
    banerImg: '',
    new: false,
  },
  {
    title: 'Райские небеса',
    type: 'Данж',
    desc: 'Высоко в облаках, скрытое от глаз смертных, находится данж Райские небеса. Это место, где сливаются воедино красота и опасность, где каждый шаг может стать последним, но награды за смелость несравнимы. За входом в данж простираются бескрайние небесные сады, наполненные ароматами экзотических цветов и звуками пения невидимых птиц. Здесь можно встретить древних стражей, охраняющих покой этого места, и загадочных существ, обитающих среди облаков. Путешественникам предстоит пройти через множество испытаний: от лабиринтов из живых растений до мостов, висящих над бездонными пропастями. На пути им встретятся как дружелюбные духи, готовые помочь, так и коварные враги, стремящиеся защитить сокровища Райских небес. Только самые отважные и умелые герои смогут раскрыть все тайны этого подземелья и обрести легендарные артефакты, которые, по преданиям, даруют своему обладателю невероятные силы и бессмертие.',
    'time-open': '6:00-9:00',
    difficulty: 5,
    'award-percents': 95,
    award: ['1', '2', '3'],
    'number-items': '0-4',
    img: '',
    banerImg: '',
    new: false,
  },
  {
    title: 'Дерево мудрости',
    type: 'Подземелье',
    desc: 'Глубоко в сердце древнего леса, окруженного магическими барьерами, возвышается величественное Дерево мудрости. Это место, где природа и магия сливаются воедино, создавая атмосферу спокойствия и таинственности. Легенды гласят, что Дерево мудрости хранит в себе знания всех эпох и народов, и только избранные могут прикоснуться к его корням. Путешественники, осмелившиеся войти в это подземелье, встретят множество испытаний. Им предстоит пройти через густые заросли, наполненные магическими существами, и разгадать древние загадки, охраняющие путь к сердцу Дерева. На каждом шагу их будут поджидать духи леса, готовые как помочь, так и испытать их на прочность. В центре подземелья, среди сияющих светлячков и звуков природы, возвышается само Дерево мудрости. Его ветви простираются к небесам, а корни уходят глубоко в землю, связывая миры. Лишь те, кто проявит истинную смелость и мудрость, смогут получить благословение Дерева и обрести знания, которые изменят их судьбу навсегда.',
    'time-open': '7:00-5:00',
    difficulty: 4,
    'award-percents': 80,
    award: ['1', '2', '3'],
    'number-items': '0-4',
    img: '',
    banerImg: '',
    new: false,
  },
  {
    title: 'Арена варваров',
    type: 'Арена',
    desc: 'В самом сердце суровых северных земель, где зима никогда не отступает, находится легендарная Арена варваров. Это место, где самые сильные и бесстрашные воины сходятся в жестоких поединках, чтобы доказать свою мощь и завоевать славу. Арена окружена высокими деревянными стенами, украшенными трофеями прошлых победителей. Внутри, на замерзшей земле, развертываются эпические сражения, где каждый удар и каждый шаг могут стать решающими. Зрители, собравшиеся на трибунах, с замиранием сердца наблюдают за каждым движением бойцов, поддерживая своих любимцев громкими криками и аплодисментами. На Арене варваров нет места слабости. Здесь правят сила, ловкость и стратегия. Воины, вступающие в бой, должны быть готовы к любым испытаниям: от схваток с дикими зверями до дуэлей с самыми опытными гладиаторами. Только самые достойные смогут выйти победителями и получить титул Чемпиона Арены варваров.',
    'time-open': '12:00-13:00',
    difficulty: 1,
    'award-percents': 100,
    award: ['1', '2', '3'],
    'number-items': '0-4',
    img: '',
    banerImg: '',
    new: false,
  },
  {
    title: 'Корабль - призрак',
    type: 'Логово',
    desc: 'На далеком и забытом острове, окруженном бурными водами и скрытым от посторонних глаз, находится Логово пиратов. Это место, где когда-то собирались самые безжалостные и хитрые морские разбойники, чтобы делить награбленные сокровища и планировать новые набеги. Вход в логово скрыт за густыми джунглями и охраняется древними ловушками, которые могут застать врасплох даже самых опытных искателей приключений. Внутри, среди полутемных коридоров и залов, можно найти следы былой роскоши: сундуки, полные золота и драгоценностей, карты с отмеченными тайниками и оружие, покрытое ржавчиной. Но не только сокровища ждут тех, кто осмелится войти в Логово пиратов. Легенды гласят, что духи погибших пиратов до сих пор охраняют свои богатства и готовы сражаться с любым, кто посягнет на их владения. Только самые смелые и умелые герои смогут пройти через все испытания, разгадать тайны логова и выйти с несметными богатствами.',
    'time-open': '12:00-13:00',
    difficulty: 3,
    'award-percents': 60,
    award: ['1', '2', '3'],
    'number-items': '0-3',
    img: '',
    banerImg: '',
    new: false,
  },
  {
    title: 'Райский сад',
    type: 'Местность',
    desc: 'В самом сердце волшебного королевства, скрытый от глаз простых смертных, находится Райский сад. Это место, где природа и магия сливаются воедино, создавая атмосферу абсолютного спокойствия и гармонии. Легенды гласят, что Райский сад был создан древними магами, чтобы служить убежищем для тех, кто ищет умиротворения и вдохновения. Вход в сад украшен величественными арками, покрытыми цветущими лианами и сияющими кристаллами. За ними простираются бескрайние луга, усыпанные экзотическими цветами, и тенистые рощи, где можно услышать пение невидимых птиц. В центре сада находится озеро с кристально чистой водой, в которой отражаются небеса и окружающие деревья. Путешественники, осмелившиеся войти в Райский сад, могут встретить здесь дружелюбных духов природы, готовых поделиться своими знаниями и помочь в трудную минуту. Но не стоит забывать, что даже в этом райском уголке могут скрываться опасности: древние стражи сада охраняют его покой и не допустят, чтобы кто-то нарушил гармонию этого места. Только те, кто проявит истинное уважение к природе и мудрость, смогут раскрыть все тайны Райского сада и обрести его благословение.',
    'time-open': '4:00-10:00',
    difficulty: 2,
    'award-percents': 50,
    award: ['1', '2', '3'],
    'number-items': '0-2',
    img: '',
    banerImg: '',
    new: false,
  },
  {
    title: 'Угодии кракена',
    type: 'Логово',
    desc: 'В глубинах мрачного океана, где свет не проникает и царит вечная тьма, находится логово кракена — мифического морского чудовища, внушающего ужас всем морякам. Это место, окруженное древними легендами и страхами, скрывает в себе множество опасностей и тайн. Вход в логово охраняется гигантскими коралловыми рифами и подводными течениями, которые могут сбить с пути даже самых опытных пловцов. Внутри, среди затонувших кораблей и останков древних цивилизаций, можно найти следы былых сражений и несметные сокровища, охраняемые верными слугами кракена — гигантскими осьминогами и морскими змеями. Путешественникам предстоит пройти через лабиринты подводных пещер, наполненных ловушками и загадками, чтобы добраться до сердца логова. Там, в самом центре, обитает сам кракен, чьи гигантские щупальца могут сокрушить любого, кто осмелится посягнуть на его владения. Только самые смелые и умелые герои смогут одолеть это чудовище и выйти с несметными богатствами, которые оно охраняет.',
    'time-open': '20:00-00:00',
    difficulty: 5,
    'award-percents': 95,
    award: ['1', '2', '3'],
    'number-items': '0-6',
    img: '',
    banerImg: '',
    new: false,
  },
  {
    title: 'Подвал утопленика',
    type: 'Данж',
    desc: 'Подвал утопленика — это мрачное подземелье, скрытое в глубинах заброшенного замка. Стены покрыты влажными пятнами, а воздух пропитан сыростью. В этом подвале обитают различные опасности, от злобных скелетов до жутких пауков. Путешественники, решившие исследовать его, должны быть готовы к битвам, ловушкам и загадкам. Особенности данжа “Подвал утопленика”: Темная атмосфера: Свет едва проникает сквозь трещины в потолке, создавая мрачное настроение. Скелеты-стражи: Встречайте враждебных скелетов, вооруженных ржавыми мечами. Они будут защищать свои территории. Ловушки: Подвал утопленика изобилует скрытыми ловушками. Будьте осторожны, чтобы не попасть в яму или не активировать механизмы. Загадки: Чтобы продвигаться дальше, путешественникам придется разгадывать загадки, связанные с историей замка и его обитателями. Сокровища: Несмотря на опасности, подвал утопленика хранит древние сокровища. Они могут быть спрятаны в сундуках или за стенами. Путешественники, рискнувшие спуститься в этот подземный мир, могут надеяться на богатую награду, но только если смогут преодолеть все преграды. Удачи в исследовании! ',
    'time-open': '20:00-00:00',
    difficulty: 3,
    'award-percents': 65,
    award: ['1', '2', '3'],
    'number-items': '0-4',
    img: '',
    banerImg: '',
    new: false,
  },
  {
    title: 'Дом культа',
    type: 'Данж',
    desc: 'В глубине мрачного леса, скрытый от посторонних глаз, стоит Дом культа — зловещее место, где некогда собирались последователи древнего и темного учения. Это подземелье, окутанное тайнами и страхом, хранит в себе множество опасностей и загадок. Вход в Дом культа охраняется массивными каменными воротами, покрытыми древними рунами и символами. Внутри, среди полутемных коридоров и залов, можно найти следы ритуалов и жертвоприношений: алтарь, покрытый засохшей кровью, и статуи древних богов, чьи глаза, кажется, следят за каждым шагом. Путешественникам предстоит пройти через лабиринты, наполненные ловушками и магическими барьерами, чтобы добраться до сердца подземелья. Здесь их ждут фанатичные последователи культа, готовые на все, чтобы защитить свои тайны. Только самые смелые и умелые герои смогут разгадать все загадки Дома культа и выйти с древними артефактами, обладающими невероятной силой.',
    'time-open': '20:00-00:00',
    difficulty: 4,
    'award-percents': 80,
    award: ['1', '2', '3'],
    'number-items': '0-5',
    img: '',
    banerImg: '',
    new: false,
  },
];

// data.forEach((item) => {
//   Dungeons.build({ ...item });
// });

// Dungeons.build({ ...data[0] });



  // sequelize.sync({force: false}).then(()=>{
  //   Dungeons.create({...data[8]})
  // })


data.forEach((item, index) => {
  sequelize.sync({force: false}).then(()=>{
    Dungeons.create({...data[index]})
  })
})
