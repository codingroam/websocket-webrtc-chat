!function(n,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(n="undefined"!=typeof globalThis?globalThis:n||self).PinyinMatch=i()}(this,(function(){"use strict";function n(n,i,a){return(i=function(n){var i=function(n,i){if("object"!=typeof n||null===n)return n;var a=n[Symbol.toPrimitive];if(void 0!==a){var u=a.call(n,i||"default");if("object"!=typeof u)return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(n)}(n,"string");return"symbol"==typeof i?i:i+""}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}var i=[],a={},u={};function e(n){for(var i=[],a=n.length,u=[],e=0;a>=e;e++)u.push(!0);return o(0,n,[],i,u),i}function o(n,a,u,e,r){var t=a.length;if(n!==t)for(var g=function(){var t=a.substring(n,h+1),g=!1;if(i.some((function(n){return 0===n.indexOf(t)}))&&!a[h+1]&&r[h+1]){if(1===t.length)u.push(t);else{var f=[];i.forEach((function(n){0===n.indexOf(t)&&f.push(n)})),u.push(f)}g=!0}else-1!==i.indexOf(t)&&r[h+1]&&(u.push(t),g=!0);if(g){var s=e.length;o(h+1,a,u,e,r),e.length===s&&(r[h+1]=!1),u.pop()}},h=n;t>h;h++)g();else e.push(u.join(" "))}function r(n,i,a,u){if(!n)return!1;var e=n.split(" ");return e.forEach((function(n){n.length>0&&u&&e.push(n.charAt(0))})),a?e.some((function(n){return 0===n.indexOf(i)})):-1!==e.indexOf(i)}function t(i,o){if(!i||!o)return!1;i=i.toLowerCase(),o=o.replace(/\s+/g,"").toLowerCase();var r=i.indexOf(o);if(-1!==r)return[r,r+o.length-1];var t=g(i.split(""),[o.split("")],o);if(t)return t;var h,f,s=function(n){for(var i=[],u=0,e=n.length;e>u;u++){var o=n.charAt(u);i.push(a[o]||o)}return i}(i);return g(s,u[o]||(f=[],e(h=o).forEach((function(n){var i=n.split(" "),a=i.length-1;i[a].indexOf(",")?i[a].split(",").forEach((function(n){i.splice(a,1,n),f.push(JSON.parse(JSON.stringify(i)))})):f.push(i)})),0!==f.length&&f[0].length===h.length||f.push(h.split("")),u=n({},h,f),f),o)}function g(n,i,a){for(var u=0;n.length>u;u++)for(var e=0;i.length>e;e++){var o=i[e],t=o.length,g=t===a.length,h=!0,f=0,s=0,c=0;if(n.length>=t){for(;o.length>f;f++)if(0===f&&" "===n[u+f+s])s+=1,f-=1;else if(" "===n[u+f+c])c+=1,f-=1;else if(!r(n[u+f+c],o[f],!n[u+f+1]||!o[f+1],g)){h=!1;break}if(h)return[u+s,c+u+f-1]}}return!1}var h={match:function(n){var u={},e=["ju","jun","jue","juan","qu","qun","que","xuan","xu","xue","yu","yuan","yue","yun","nve","lve"];return Object.keys(n).forEach((function(a){if(u[a]=n[a],i.push(a),e.includes(a)){var o=-1!==(r=a).indexOf("u")?r.replace("u","v"):r.replace("v","u");u[o]=n[a],i.push(o)}var r})),a=function(n){var i={};for(var a in n)for(var u=n[a],e=0,o=u.length;o>e;e++)i[u[e]]=i[u[e]]?i[u[e]]+" "+a:a;return i}(u),t}({yi:"一丿乁乂义乙也亄亦亿仡以仪伇伊伿佁佗佚佾侇依俋倚偯儀億儗兿冝刈劓劮勚勩匇匜医印叆叕台叹吚听呓呭呹咦咿唈嗌噎噫囈圛圪圯坄坨垼埶埸墿壱壹夁夕失夷奇奕妷姨姬媐嫕嫛嬄嬑嬟孴它宐宜宧寱寲射尾屹峄峓崎崺嶧嶬嶷已巳巸帟帠幆庡廙异弈弋弌弬彛彜彝彞彵役忆忔怈怠怡怿恞悒悘悥意憶懌懿戺扅扆扡抑择拸挹掎掜揖搋搤撎擇攺敡敼斁施旑旖易昳晹暆曀曎曵杙杝枍枻柂栘栧栺桋棭椅椬椸榏槷槸樴檍檥檹櫂欥欭欹歖歝殔殪殹毅毉汽沂沶治泄泆洢洩洫浂浥浳渫湙溢漪潩澤澺瀷炈焉焬焱焲熈熙熠熤熪熼燚燡燱犄狋狏猗獈玴珆瑿瓵畩異疑疙疫痍痬瘗瘞瘱癔益眙睪瞖矣硪礒礙祎禕秇移稦穓竩笖箷簃籎紲絏維綺縊繄繶繹绁绎绮维缢羛羠羡羨義羿翊翌翳翼耛耴肄肊胰膉臆舣艗艤艺艾芅苅苡苢荑萓萟蓺薏藙藝蘙虉蚁蛇蛜蛡蛦蛾蜴螔螘螠蟻衣衤衪衵袂袆袘袣裔裛裿褘褹襗襼觺訑訲訳詍詑詒詣誃誒誼謚謻譩譯議譺讉讛议译诒诣诶谊谥豙豛豷貖貤貽賹贀贻跇跠踦軼輗輢轙轶辥辷迆迤迭迱迻逘逸遗遺邑郼酏醫醳醷释釋釔釴釶鈘鈠鉇鉈鉯銕銥錡鎰鏔鐿钀钇铊铱锜镒镱阣阤陁陭隶隿雉霅霬靉靾頉頤頥顊顗颐食飴饐饴駅驛驿骮鮧鮨鯣鳦鴺鶂鶃鶍鷁鷊鷖鷧鷾鸃鹝鹢鹥黓黝黟黳齮齸",ding:"丁仃叮啶奠奵定嵿帄忊掟椗汀濎灯玎町甼疔盯矴碇碠磸耵聢腚艼萣葶薡虰訂订酊釘鋌錠鐤钉铤锭靪頂顁顶飣饤鼎",zheng:"丁丞争伥佂倀凧埥埩塣姃媜峥崝崢嶒帧幀征徎徰徴徵怔愸憕承抍拯挣掙掟揁撜政敞整晸止正氶浧湞炡烝爭狰猙町症癥眐睁睜瞠筝箏篜糽綪聇脀蒸証諍證证诤趟踭郑鄭鉦錚钲铮鬇鮏鯖鯹鲭鴊",kao:"丂尻嵪彀拷挢搞撟攷栲槀槁洘烤焅熇燺犒稾考薧藳訄銬铐靠髛鮳鯌鲓",yu:"丂与予于亏亐伃伛余俁俞俣俼偊傴僪儥兪匬叞吁吳吾唷唹喁喅喐喩喻噊噢噳圄圉圫域堉堣堬墺夕奥妤妪娛娪娯娱婾媀媮嫗嬩宇宛寓寙尉屿峪峿崛崳嵎嵛嶎嶼庽庾彧御忬悆悇惌惐愈愉愚慾懊懙或戫扜扵拗挧捓揄敔斔斞於旟昙昱杅栩栯桙梧棛棜棫楀楡楰榆櫲欎欝欤欲歈歟歶毓汙汚污汩浴淢淤淯渔渝湡滪漁澚澞澦澳灪灹焴煜煨熨燏燠燰爩牏狱狳獄獝玉王玗玙琙琟瑀瑜璵畬畭痏瘀瘉瘐癒盂盓睮矞砡硢礇礖礜祤禦禹禺秗稢稶穥穻窬窳竽箊篽籅籞籲粥紆緎繘纡罭羭羽翑聿肀育腧腴臾舁舆與舒艅芋芌苑茟茰荢菀菸萭萮萸蒮蓣蓹蔚蕍蕷薁藇蘌蘛虞虶蜍蜟蜮蝓蝺螸蟈衘衙衧袬裕褕覦觎誉語諛諭謣譽语谀谕谷豫貍貐貗踰軉輍輿轝迂迃逳逾遇遹邘郁郚鄅酑醧釪鈺銉鋊鋙錥鍝鐍鐭钰铻閼閾阈阏陓隃隅隩雓雨雩霱預頨顒预颙飫餘饇饫馀馭騟驈驭骬髃鬰鬱鬻魊魚魣鮽鯲鰅鱊鱮鱼鳿鴥鴧鴪鵒鷠鷸鸆鸒鹆鹬麌齬齵龉",qi:"七丌乞亓亝亟企伎俟倛偈傶僛其凄切刺剘勤吃启吱呇呮咠唘唭啓啔啟喰嘁噐器圻埼夡奇契妻娸婍宿屺岂岐岓崎嵜己帺弃忔忮忯忾恓恝悽愒愭愾慼慽憇憩懠戚扢扱扺技抵拞挈捿掑揭摖支攲敧斉斊旂旗晵暣朞期杞枝柒栔栖桤桼梩棄棊棋棨棲榿槭檱櫀欫欹欺歧毄气気氣汔汽沏泣洓济淇淒済渍渏湆湇滊漆漬濝濟炁焏猉玂玘琦琪璂甈甭畦畸疧盀盵矵砌碁碕碛碶磎磜磧磩礘示祁祇祈祗祺禥禨稘稽竒簯簱籏粸紪絜綥綦綨綮綺緀緕緝纃绮缉缼罊耆肐肵脐臍舙艩芑芞芪荠萁萋萕葺蕲薺藄蘄蚑蚔蚚蛴蜝蜞螇螧蟣蟿蠐衹袳裿褀褄觭訖諆諬諿讫豈起趞趿跂踑踖踦蹊躤躩軙軝迄迉逗邔郪鄿釮錡鏚鐖锜闙隑霋頎颀饑騎騏騹骐骑鬐鬾鬿魌魕鮨鯕鰭鲯鳍鵸鶀鶈麒麡鼜齊齐齮",shang:"丄上仩伤傷商场垧埫場塲墒尙尚恦愓慯扄晌殇殤汤湯滳漡熵禓緔绱蔏螪蠰裳觞觴謪賞赏踼鑜鞝鬺",xia:"丅下侠俠假傄匣厦叚吓呀呷哧唬嗄嗑嚇圷埉夏夓夾岈峡峽廈徦懗押捾搳敮昰暇柙梺欱歃毳浃浹溊炠烚煆狎狭狹珨瑕疜疨瘕睱瞎硖硤碬磍祫笚筪給縀縖给罅翈舝舺芐葭蕸虾蝦螛諕謑谺赮轄辖遐郃鍜鎋鏬閕閜陜陿霞颬騢魻鰕鶷黠",mo:"万么伯佰冒劘劰勿嗼嘿嚤嚩圽塻墨妺嫫嫼嬷寞尛帓帕帞怽懡戂抚抹摩摸摹撫擵攠无昧昩暯末枺模橅歾歿殁沒没沫漠瀎無爅狢瘼百皌眜眽眿瞐瞙砞磨礳秣粖糢絈絔縸纆耱脉膜艒茉莈莫蓦藐藦蘑蛨蟆蟔袜袹謨謩譕谟貃貈貉貊貌貘銆鏌镆陌靺鞨饃饝馍驀髍魔魩魹麼麽麿默黙",wan:"万丸乛倇免关刓剜卍卐唍园埦塆壪夗夘妧娩婉婠孯完宛岏帵弯彎忨惋惌抏挽捖捥掔晚晩晼朊杤梚椀槾汍涴湾潫澫灣烷玩琓琬畹皖盌睕碗笂箢紈絻綄綩綰纨绾翫脕脘腕芄苋莞莧莬菀萖萬蔓薍蚖蜿豌貦貫贃贎贯踠輐輓邜鄤鋄鋔鋺錽鍐鎫関闗關頑顽骩骪骫魭",zhang:"丈仉仗仧傽墇嫜嶂帐帳幛幥张弡張彰慞扙承掌暲杖樟涨涱漲漳獐璋痮瘬瘴瞕礃章粀粻胀脹蔁蟑賬账遧鄣鏱鐣長镸长障鞝餦騿鱆麞",san:"三伞俕傘傪厁叁参參叄叅壭帴弎彡散橵毵毶毿氵潵犙糁糂糝糣糤繖蔘謲鏒鏾閐霰饊馓鬖",ji:"丌丮乁乩亟亼伋伎佶倚偈偮僟其兾冀几击刉刏剂剞剤劑勣卙卟即卽厝及叝叽吇吉呰咭哜唧喞嗘嘰嚌圾坖垍基堲塉墍墼奇妀妓姞姬姼嫉季寂寄尐居屐屰岋岌峜嵆嵇嵴嶯己帺幾庴廭彐彑彶徛忌忣急悸惎愱憿懠懻戟戢技挤掎揖揤撃撠撽擊擠攲敧旡既旣暨暩曁期机极枅梞棋棘楖楫極槉槣樭機橶檕檝檵櫅櫭殛毄汥汲泲洁洎济淁済湒漃漈潗激濈濟瀱焏犄犱狤猗玑璂璣璾畟畸畿疵疾痵瘠瘵癠癪皀皍睽瞉瞿矶磯祭禝禨积秸稘稩稷稽穄穊積穖穧笄笈筓箕箿簊簎籍粢糭系紀紒級結給継緝縘績繋繫繼级纪结给继绩缉罽羁羇羈耤耭肌胔脊脔脨膌臮艥艻芨芰芶苙茍茤荠莋萁萕葪蒩蒺蓟蔇蕀蕲蕺薊薺藉蘄蘎蘮蘻虀虮蜡蝍螏蟣蟻蟿蠀裚褀襀襋覉覊覘覬覿觇觊觌觙觭計訐記誋諅諔譏譤计讥讦记诘谻谿賫賷赍趌趞跂跡跻跽踑踖踦蹐蹟躋躤躸輯轚辑迹郅郆鄿銈銡錤鍓鏶鐖鑇鑙际隔際隮集雞雦雧霁霵霽革鞊鞿韲颳飢饑饥騎驥骑骥髻鬾魝魢魥鮆鯚鯯鯽鰶鰿鱀鱭鱾鲚鲫鳮鵋鶏鶺鷄鷑鸄鸡鹡麂齊齌齍齎齏齐齑",bu:"不佈僕勏卜卟吥咘哺埔埗埠堡婄尃峬布庯廍怖悑抪拊捕捗捬撲擈晡柨步歨歩溥獛瓿秿箁篰簿荹蔀薄补補誧踄輹轐逋部郶醭鈈鈽钚钸附陠鞴餔餢鯆鳪鵏鸔",dun:"不伅俊吨噸囤墩墪壿庉忳惇憞撉撴敦楯橔沌潡炖燉犜獤盹盾砘碷礅腞腯蜳豚趸踲蹲蹾躉逇遁遯鈍鐓鐜钝镦頓顿驐",fou:"不否垺妚炰紑缶缹缻芣衃雬鴀",fu:"不乀仅付伏伕佛俌俘俛俯偩偪傅冨冹凫刜副包匐呋呒咈咐哹哺嘸坿垘垺報复夫妇妋姇娐婏婦媍嬎嬔孚孵宓富尃岪峊巿市帗幅幞府弗弣彳彿復怀怤怫懯扶抙抚拂拊捊捬掊撫敷斧旉服枎枹柎柫柭栿桴棴椨椱榑氟汱沕沸泭洑浮涪溥滏澓炥烰焤父玞玸琈璷甫甶畉畐畗癁盙砆砩祓祔福禣秿稃稪竎符笰筟箁箙簠粰糐紨紱紼絥綍綒緮縛纀绂绋缚罘罦翇肤胕脯腐腑腹膚艀艴芙芣芾苻茀茯荂荴莆莩菔萉萯葍蓲蕧虙蚥蚨蚹蛗蜅蜉蝜蝠蝮衭袚袝袱複褔襆襥覄覆訃詂諨讣豧負費賦賻负费赋赙赴趺跗踾軵輔輹輻辅辐还邚邞郍郙郛鄜酜酻釜釡鈇鉘鉜錇鍑鍢锫阜阝附陚鞴韍韛韨頫颫颰馥駙驸髴鬴鮄鮒鮲鰒鲋鳆鳧鳬鳺鴔鵩鶝麩麬麱麸黻黼",mian:"丏俛偭免冕冥勉勔厸喕娩婂媔嬵宀愐棉檰櫋汅沔泯渑湎湣澠牑眄眠瞑矈矊矏糆絻綿緍緜緡緬绵缅缗腼臱芇莬葂蝒蠠面靣靦鮸麪麫麵麺黽黾",gai:"丐乢侅匃匄咳垓姟峐忋戤摡改晐杚核概槩槪汽溉漑瓂畡盖磑祴絠絯胲芥荄葢蓋該该豥賅賌赅郂鈣鎅钙閡阂阣陔隑骸",chou:"丑丒仇侴俦偢儔吜嚋圳妯婤媿嬦帱幬怞惆愁懤扭抽掫揄搊擣杻杽栦椆檮殠溴燽牰犨犫畤畴疇瘳皗盩眣瞅矁稠筹篘籌紬絒綢绸臭臰菗薵裯詶謅譸讎讐诌诪跾踌躊遚酧酬醔醜醻鈕钮雔雠魗鮘鯈鲋",zhuan:"专传傳僎僝剸叀啭囀堟塼嫥孨専專恮抟摶撰沌湍漙灷瑑瑼甎砖磚竱篆篹篿簨籑縳耑腞膞蒃蟤襈諯譔賺赚転轉转鄟顓颛饌馔鱄",cu:"且促卆卒噈娕娖媨徂怚憱戚捽殂猝瘄瘯皻簇粗縐縬绉脨蔍蔖蔟觕誎趋趗趣趥趨踀踓踤踧蹙蹴蹵酢醋錯错顣麁麄麆麤鼀",ju:"且举仇伡佝侷俥俱倨倶僪具冣凥剧劇勮匊句告咀圧坥埧埾壉姐姖娵娶婅婮寠局居屦屨岠岨崌巈巨弆忂怇怐怚惧愳懅懼抅拒拘拠拱挙挶捄据掬揈揟據擧昛枸柜桔梮椇椈椐榉榘橘檋櫸欅歫毩毱沮泃泦洰涺淗渠湨澽炬焗焣爠犋犑狊狙珇琚疽痀眗瞿矩砠租秬窭窶筥篓簍簴籧粔粷罝耟聚聥腒臄舉艍苣苴莒菊菹萭葅蒌蒟蒩蓻蔞蘜蘧處虡蚷蛆蜛螶袓裾襷詎諊讵豦貗趄趉趜趡足跔跙距跼踘踞踽蹫蹻躆躹軥輂车遽邭邹郥郰郹鄒鄹醵鉅鉏鋤鋦鋸鐻钜锄锔锯閰陱雎雏雛鞠鞫颶飓駏駒駶驕驧驹骄鬻鮈鮍鮔鲏鴡鵙鵴鶋鶪鼰鼳齟龃",qie:"且伽倢倿偼切匧厒唼喋契妾婕媫帹怯悏惬愜慊挈捷朅椄沏洯淁漆疌癿砌稧穕窃竊笡箧篋籡緁聺脞苆茄蕺藒蛣蛪詧趄跙踥郄鍥鐑锲魥鯜鰈鲽",pi:"丕仳伓伾俾僻副劈匹卑吡否啤噼噽嚊嚭圮坏坯埤培壀妚媲嫓屁岯崥嶏帔庀庇庳怶悂憵扑批披抷拂揊擗旇朇枇枈椑榌比毗毘毞淠渒潎澼濞炋焷狉狓猈琵甓疈疋疲痞痦痺癖皮睤睥砒磇礔礕秛秠稫笓箆篦篺簲粃紕纰罴罷羆翍耚肶脴脾腗膍芘苉苤萆蕃蚌蚍蚽蚾蜱螕螷蠯被裨諀譬豼豾貔辟邳郫鄱釽鈈鈚鈲鈹鉟銔銢錃錍鎞钚铍闢阰陂陴隦霹鞞頗顖颇駓髬魮魾鮍鲏鴄鵧鷿鸊鼙",shi:"世丗乨亊事什仕似佀佦使侍兘冟势勢匙十卋厔叓史呞呩咶唑啇嗜嘘噓噬埘埶堤塒士失奭始姼媞嬕实実室宩宲寔實寺尸屍屎峕峙崼嵵市师師式弑弒彖徥忕忯恀恃惿戺拭拾提揓斯施时旹是昰時枾柹柿栻楴榁榯檡殖氏汁沶洂浉液湜湤湿溡溮溼澤澨濕炻烒煶狧狮狶獅瑡畤痑眂眎眡睗矢石示礻祏禵秲竍笶笹筛筮箷篒篩簭籂籭絁繹绎耆肢胑舍舐舓莳葹蒒蒔蓍虱蚀蝕蝨螫褆褷襫襹視视觢訑試詩誓諟諡謚識识试诗谥豕貰贳赫跩軾轼辻适逝遈遞適遰遾邿郝酾醳釃釈释釋釶鈰鉂鉃鉇鉈鉐鉽銴鍉鍦鎩铈铊铩食飠飭飾餙餝饣饬饰馶駛驶魳鮖鯴鰘鰣鰤鲥鲺鳲鳾鶳鸤鼫鼭齛齥",qiu:"丘丠仇俅区厹叴唒囚团坵媝宿寈崷巯巰恘惆愀扏捄搝朹梂楸櫹殏毬氽氿求汓泅浗渞湫湬湭煪牫犰玌球璆皳盚秋秌穐篍糗紌絿緧肍艽莍萩蓲蘒虬虯蚯蛷蝤蝵蟗蠤裘觓觩訄訅賕赇趜趥逎逑遒邱邺酋醔釓釚釻銶钆鞦鞧馗鮂鯄鰌鰍鰽鱃鳅鳩鵭鶖鸠鹙鼽龜龝龟",bing:"丙並仌併倂偋傡兵冫冰垪寎屏平并幷庰怲抦拼掤摒昞昺枋柄栟栤梹棅槟檳氷炳燷燹琕疒病痭癛癝眪禀秉稟窉竝絣綆绠苪蛃誁跰邴鈵鉼鋲陃靐鞆鞞鞸餅餠饼鮩",ye:"业也亪亱倻偞僷冶叶吔咽啘喝嘢噎嚈埜堨墅墷壄夜射峫嶪嶫懕抴拽捓捙掖揞揲揶擖擛擨擪擫斜晔暍曄曅曗曳枒枼枽椰楪業歋殕殗洂洇涂液漜潱澲烨煠熀燁爗爷爺瓛痷皣瞱瞸礏窫緤耶聂聶腋荼葉虵蠮蠱謁谒邪邺鄓鄴野釶釾鋣鍱鎁鎑鐷铘靥靨頁页餘餣饁饐馀馌驜鵺鸈黦",cong:"丛从偬匆叢囪囱婃孮従徖從忩怱悤悰慒憁暰枞棇楤樅樬樷欉淙漎漗潀潈潨灇焧熜燪爜琮瑽璁瞛碂窗篵総緫縦縱總繱纵聡聦聪聰苁茐菆葱蓯蔥藂蟌誴謥賨賩鏦騘驄骢",dong:"东侗倲働冬冻凍动動勭咚垌埬墥夂姛娻嬞岽峒峝崠崬恫懂戙挏揰昸東栋桐棟氡氭洞涷湩烔燑狫甬硐笗筒筩箽絧胨胴腖苳菄董蕫蝀衕詷諌迵酮霘駧騆鮗鯟鶇鶫鸫鼕",si:"丝亖以伺似佀佁価俟俬偲傂儩兕凘厕厠厮厶台司咝嗣嘶噝四姒娰媤孠寺巳廝徙思恖愢撕斯杫析枱柶梩楒榹死汜泀泗泤洍涘澌瀃灬燍牭磃祀祠禗禠禩私竢笥簛糸糹絲緦缌罒罳耜肂肄肆菥蕬蕼虒蛳蜤螄螔蟖蟴覗謕貄逘釲鈶鈻鉰銉銯鋖鍶鐁锶雉颸飔食飤飴飼饲饴駟騃騦驷鷉鷥鸶麗鼶",cheng:"丞乗乘伥侱倀偁僜净呈呛嗆噌城埕埩堘塍塖娍宬峸嵊庱徎徴徵悜惩憆憕懲成承抢挰掁搶摚摤撐撑撜敞晟朾枨柽棖棦椉槍樘橕橖橙檉檙氶泟洆浈浧浾淨溗澂澄瀓瀞爯牚珵珹琤瑲畻盛盯睈瞠矃碀秤称程稱穪窚竀筬絾緽脀脭荿虰蛏蟶裎觕誠诚赪赬趟踜蹦逞郕郢酲醒鋮鎗鏳鏿鐺铖铛阷靗頳饓騁騬骋鯎黨",sheng:"丞乗乘偗冼剩剰勝升呏圣垩墭声姓娍媵嵊憴斘昇晟晠曻枡榺橳殅殸泩渑渻湦澠焺牲狌珄琞生甥甸盛省眚竔笙箵縄繩绳聖聲胜苼蕂譝貹賸鉎鍟阩陞陹鱦鵿鼪",diu:"丟丢銩铥颩",liang:"両两亮俍俩倆倞兩冫凉哴唡啢喨墚悢惊掚晾梁椋樑涼湸煷簗粮粱糧綡緉脼良莨蜋蜽裲諒谅踉蹒蹣輌輛輬辆辌量鍄閬阆靓靚駺魉魎",you:"丣亴优佑侑偤優冘卣又友右叹呦哊唀嚘囿坳奥妋姷孧宥尢尣尤峟峳幼幽庮忧怞怣怮悠憂懮戭扰揂揄攸斿有柚栯梄梎楢槱櫌櫾汓汼沋油泅泈泑浟游湵滺瀀牖牗牰犹狖猶猷獶由甴疣痏祐禉秞糿繇纋羐羑羗耰聈聱肬脜脩苃莜莠莤莸蒏蕕蚘蚰蚴蜏蝣蝤褎褏訧誘诱貁輏輶迶逌逰遊邎邮郵鄾酉酭釉鈾銪銹铀铕锈駀魷鮋鱿鲉麀黝鼬",yan:"严乵但俨俺偃偐偣傿儼兖兗円剡剦匽厂厃厌厣厭厳厴咽唁唌喦喭噞嚥嚴囐埏埯堰塩墕壛壧夏夵奄妍妟姲姸娫娮媕嫣嬊嬐嬮嬿孍宴屵岩崄崦嵃嵒嵓嶖嶮巌巖巗巘巚巡广庵廵延弇彥彦恹愝懕戭扊抁挩挻捝掞掩揅揜揞敥昖晏晻暥曕曮棪椻椼楌樮橪檐檿櫩欕殗殷氤沇沿洇洝涎淊淡淫淹渰渷湮湺溎滟演漹灎灔灧灩炎炏烟烻焉焔焰焱煙熖燄燕爓牪狠狿猒珚琂琰瓛甗盐眼研砚硏硯硽碞礹筵篶簷綖縯罨羡羨胭腌膁臙艳艶艷芫莚莶菴菸萒葊葕蔅蔫薟虤蜒蝘衍裺褗覃覎觃觾言訁訮詽諺讌讞讠谚谳豓豔豜豣贋贗赝趼躽軅这這遃郔郾鄢酀酓酽醃醶醼釅鉛錟铅锬閆閹閻閼闫阉阎阏阭阽险陰隁隒險雁靥靨顏顑顔顩颜餍饜騐験騴驗驠验鬳魇魘鰋鳫鳱鴈鴳鶠鷃鷰鹽麙麣麲黡黤黫黬黭黰黶鼴鼹齗齞齴龂龑",ban:"並伴分办半坂坢埿姅岅彬怑扮扳拌搫搬攽斑斒昄朌板柈湴版班瓣瓪瘢癍秚籓粄絆绊肦舨般蝂螁螌褩覂豳跘辦辧辨辩辬辯鈑鉡钣闆阪靽頒颁魬鳻",bang:"並傍嗙垹埲塝嫎峀崗帮幇幚幫彭徬挷捠搒旁梆棒棓榜浜牓玤硥磅稖紡綁縍纺绑膀艕蒡蚄蚌蛖蜯螃謗谤邦邫鎊镑鞤騯髈",sang:"丧喪嗓搡桑桒槡磉纕褬鎟顙颡",gun:"丨惃棍棞浑混渾滚滾琯璭睔睴磙緄緷绲蓘蔉衮袞裷謴輥辊錕锟鮌鯀鰥鲧鳏",shu:"丨书侸俆俞俶倏倐儵兪叔咰售嗽塾墅姝娶婌孎孰尌尗属屬庶庻忄忬怷恕悆戍抒捈捒掓揄摅攄数數暏暑曙書朮术朱束杸杼枢柕树梳樞樹橾殊殳毹毺氀沭涑淑漱潄潏潻澍濖瀭焂熟瑹璹疋疎疏癙秫稌竖竪籔糬紓紵絉綀纾署翛腧舒荗荼菽蒁蒣蔬薥薮薯藪藷虪蜀蠴蠾術裋襡襩謶豎豫贖赎跾踈軗輸输述透鄃野鉥錰鏣鐲镯陎除隃鮛鱪鱰鵨鶐鷸鸀鹬黍鼠鼡",jiu:"丩久乆九乣倃僦剹勼匓匛匶厩咎啾噍奺就廄廏廐愁慦捄揂揪揫摎救旧朻杦柩柾桕樛橚殧氿汣湫湬灸牞玖畂疚稵穋究窌糺糾紤繆纠缪臼舅舊舏萛蝤赳蹴酒镹阄韭韮鬏鬮鯦鳩鷲鸠鹫麔齨",gan:"个乹乾亁仠佄倝凎凲咁坩奸尲尴尶尷干幹忓感扞捍擀攼敢旰杆柑桿榦橄檊汗汵泔浛淦漧澉灨玕玵甘疳皯盰矸秆稈竿笴筸篢簳粓紺绀肝芉苷虷衦詌諴豃贑贛赣赶趕迀酐釬錎飦骭魐鰔鱤鳡鳱",ge:"个介仡佫佮個割匌可各合吤呄咯哥哿嗝嘅嘢噶圪塥屹彁愅戈戓戨扢挌搁搿擱敋杚格槅櫊歌浩滆滒澔牫牱犵猲獦疙盖砝硌秴箇紇纥肐胳膈臈臵舸茖菏葛蓋虼蛒蛤袼裓觡詥諽謌輵轕鉀鉻鉿鎑鎘鎶钾铪铬镉閘閣閤闸阁隔革鞈鞷韐韚頜颌騔骼髂鬲魺鮥鮯鰪鲄鴐鴚鴿鵅鸽",ya:"丫乛亚亜亞伢俹倻劜厊压厌厓厭吖吾呀呾哑唖啞圔圠圧垭埡堊堐壓姶娅婭孲岈崕崖庌庘御押拁挜掗揠札枒桠椏椻歇氩氬浥涯漄潝烏牙犽猚猰玡琊瑘疋疨痖瘂睚砑碣磍稏穵窫笌聐芽蕥蚜衙襾訝讶軋輅輵轧辂迓邪釾錏鐚铔閘闸雅顔颜鴉鴨鵪鵶鶕鸦鸭鹌鼼齖齾",zhuang:"丬僮壮壯壵奘妆妝娤幢庄庒憧戅戆戇撞桩梉樁湷漴焋状狀獞粧糚艟荘莊装裝贑贛赣",zhong:"中乑仲伀众偅冢刣喠堹塚夂妐妕媑尰幒彸徸忠忪柊歱汷泈潼炂煄狆瘇盅眾祌种種穜童筗籦終緟终肿腫舂舯茽董蔠蚛蚣蝩螤螽蟲衆衳衶衷褈諥踵蹱迚重鈆鈡銿鍾鐘钟锺鴤鼨",jie:"丯亥介价借倢假偈偼傑價刦刧刼劫劼卩卪吤唧唶啑喈嗟嚌圾堦堺契她妎姐婕媎媘媫嫅孑家尐屆届岊岕崨嵑嵥嶰嶻巀幯庎徣忦悈戒截扢担拮拾捷接掲揭搩擑擮擳斺昅暨曁杰桀桔桝椄楐楬楶楷概榤構檞櫭毑洁洯渇渴湝滐潔煯犗狤獬玠琾界畍疌疖疥痎癤皆睫砎砝碣礍祖秸稭竭節籍紇紒結絜繲纥结羯耤脻艐节芥莭菨蓵藉蚧蛣蛶蜐蝍蝔蠘蠞蠽街衱衸袓袷袺裓褯解觧訐詰誡誱謯讦诘诫趌跲踕迼鉣鍇鍻锴阶階雃鞂鞊頡颉飷骱髫魝魪鮚鲒鶛",feng:"丰仹俸偑僼冯凤凨凬凮唪埄堸夆奉妦寷封峯峰崶捀捧摓枫桻楓檒沣沨泛浲渢湗溄漨灃炐烽焨煈熢犎猦琒甮疯瘋盽砜碸篈綘縫缝肨舽艂莑葑蘕蘴蚌蜂覂覅諷讽豊豐賵赗逄逢鄷酆鋒鎽鏠锋靊風飌风馮鳯鳳鴌鵬鹏麷",guan:"丱串倌关冠卝婠官悹悺惯慣懽掼摜斡果桄棺樌櫬權毌沦泴涫淉淪潅灌爟琯瓘痯瘝癏盥矔矜礶祼窤筦管綸纶罆罐舘莞菅萖蒄覌観觀观貫贯躀輨遦錧鏆鑵閞関闗關雚館馆鰥鱞鱹鳏鳤鵍鸛鹳",kuang:"丱儣兄况劻匡匩卝哐圹壙夼岲廣忹恇懬懭抂旷昿曠枉框況洭湟爌狂狅眖眶矌矿砿硄磺礦穬筐筺絋絖纊纩誆誑诓诳貺贶軖軠軦軭迋逛邝邼鄺鉱鋛鑛鵟黋",chuan:"串传傳僢剶喘圌堾巛川惴掾暷椽歂氚汌猭玔瑏甎穿篅膞舛舡舩船荈賗踳踹輲遄釧钏镩鶨",chan:"丳产亶佔僝僤儃儳兎兔冁刬剗剷劖单単厘啴單嘽嚵囅團墠壥婵嬋嬗孱崭嵼嶃嶄巉幝幨廛忏憚懴懺掸掺搀摌摲摻撣攙斺旵梴棎榐欃毚沾浐渐湹滻漸潹潺澶瀍瀺灛煘燀獑產産硟磛禅禪簅緂緾繟繵纏纒缠羼胀脠艬苫蒇蕆蝉螹蟬蟺蟾袩裣裧襌襜襝覘觇誗諂譂讇讒讖谄谗谶蹍躔辿鄽酁醦鉆鋋鋓鏟鑱铲镡镵閳闡阐韂顫颤饞馋骣",lin:"临亃任伈僯凛凜厸吝啉壣崊嶙廩廪恡悋惏懍懔拎撛斴晽暽林橉檁檩涁淋渗滲潾澟瀶焛燐獜玪琳璘甐疄痳癛癝瞵碄磷稟箖粦粼繗翷膦臨菻蔺藺賃赁蹸躏躙躪轔轥辚遴邻鄰鏻閵阴隣霖顲驎魿鱗鳞麐麟",zhuo:"丵倬剢劅勺卓叕啄啅啜噣圴坧墌妰娺彴拙捉捔掇撯擆擢斀斫斮斱斲斵晫杓桌梲棁棳棹椓槕櫡汋浊浞涿淖準濁濯灂灼炪烵焯犳狵琢琸着矠硺禚穛穱窡窧箸篧籗籱繳缴罬聉肫茁著蓔蕞藋蝃蠗蠿諁諑謶诼趠趵踔蹠躅酌鉵鋜鐯鐲镯鵫鷟",dian:"丶佃佔傎典厧唸坫垫埝墊壂奌奠婝婰嵮巅巓巔店惦扂拈掂攧敁敟椣槇槙橂橝殿沾涎淀湺滇澱点玷琔电甸痶瘨癜癫癲碘磹簟腍蒧蕇蜓蜔詀踮蹎鈿钿阽電靛頕顚顛颠驔點齻",zhu:"丶主予伫佇住侏劅劚助劯咮嗻嘱噣囑坾墸壴孎宁宔尌属屬嵀庶拄搊敱斀斗斸曯朝术朱杼枓柠柱柷株楮槠樦橥櫡櫧櫫欘殶泏泞注洙渚潴澍濐瀦灟炢炷烛煑煮燭爥猪珠疰瘃眝瞩矚砫硃磩祝祩秼窋竚竹竺笁笜筑筯箸築篫篴紵紸絑纻罜羜翥舳芧苎苧茁茱茿莇著蓫蕏薥藷藸蚰蛀蛛蝫蠋蠩蠾袾褚註詝誅諸诛诸豬貯贮跓跙跦躅軴迬逐逗逫邾鉏鉒銖鋳鑄钃铢铸阻除陼霔飳馵駐駯騶驺驻鮢鯺鱁鴸鸀麆麈鼄",ha:"丷吓呵哈奤妎為獬虾蛤蝦鉿铪",dan:"丹丼亶亻伔但倓僤儃儋冄冉刐勯匰单単卩呾唌啖啗啿單嘾噉噡嚪坛壇妉娊媅帎弹弾彈忱怛惔惮愖憚憺憾抌担掸撢撣擔旦柦檐欿殚殫氮沊泹淡湛潭澶澸澹燀狚玬瓭甔疍疸瘅癉癚皽眈石砃禫窞箪簞紞繵耼耽聃聸胆腅膻膽萏蛋蜑蜒蟺衴褝襌襜覘觇觛訑詹誕譂诞贉贍赕赡蹛躭郸鄲酖醈霮頕餤饏馾駳髧鴠黕黮黵",wei:"为亹伟伪位倭偉偎偽僞儰卫危厃叞味哙唩唯喂喡喴噲囗围圍圩堤墛壝委威娓媁媙媦寪尉尾岿峗峞崣崴嵔嵬嶶巋巍帏帷幃廆徫微恑惟愄愇慰懀捤捼揋揻撝撱斖暐有未机桅梶椲椳楲欈沇沩洈洧浘涠渨渭湋溈溦潍潙潿濊濰濻瀢炜為烓煀煒煟煨熨熭燰爲犚犩猗猚猥猬玮琟瑋璏瓗畏痏痿癐癓眭瞶硊硙碨磈磑立維緭緯縅纬维罻胃腲艉芛芟苇苿茟荱荽菋萎萏葦葨葳蒍蓶蔚蔿薇薳藯蘶蜲蜹蜼蝛蝟螱衛衞褽覣覹觹觽觿詴諉謂讆讏诿谓趡踒踓躗躛軎轊违逶違遗遺鄬醀錗鍏鍡鏏闈闱阢隇隈隗隹霨霺韋韑韙韡韦韪頠颹餧餵饖骩骪骫魏鮇鮠鮪鰃鰄鰖鲔鳂鳚",jing:"丼井京亰仱俓倞傹儆儬兢净凈刭剄劤劲勁坓坕坙境妌婙婛婧宑巠幜弪弳径徑惊憬憼擏敬旌旍晟景晶暻曔桱梷橸檠殑氏汫汬泾浄涇淨濪瀞烃烴燝猄獍獷璄璟璥痉痙睛秔稉穽竞竟竧竫競竸箐粇粳精経經经聙肼胫脛腈茎荆荊莖菁葝蜻蟼誩警踁迳逕醒鋞鏡镜阱陉陘靑青靓靖靘静靚靜頚頴頸颈颕驚鯨鲸鵛鶁鶄麖麠鼱",li:"丽仂位例俐俚俪傈儮儷凓刕列利剓剺劙力励勵历厉厘厤厯厲叓叕叻吏呖哩唎唳喱嚟嚦囄囇坜塛壢娌娳婯嫠孋孷屴岦峛峲巁廲悝悡悧悷慄戾扐扚捩搮擽攊攦攭斄暦曆曞朸李枥柂栃栎栗栛栵梨梸棃棙樆檪櫔櫟櫪欐欚歴歷氂沥沴沵泣浬涖淚溧漓澧濼濿瀝灑灕爄爏犁犂犛犡狸猁珕珞理琍瑮璃瓅瓈瓑瓥疠疬痢癘癧皪盠盭睝矖砅砬砺砾硌磿礪礫礰礼禮禲离秝穲立竰笠筣篥篱籬粒粚粝粴糎糲綟縭纅纚缡罹翮脷艃苈苙茘荔荲莅莉菞蒚蒞蓠蔾藜藶蘺蚸蛎蛠蜊蜧蝕蝷蟍蟸蠇蠡蠣蠫裏裡褵觻詈謧讈豊貍赲跞躒轢轣轹逦邌邐郦酈醨醴釃里釐鉝銐鋫鋰錅錑鎘鏫鑗鑠铄锂镉隶隷隸離雳霾靂靋颯飒驪骊鬁鬲鬴鯉鯏鯬鱧鱱鱳鱺鲡鲤鳢鳨鴗鵹鷅鸝鹂麗麜黎黧",pie:"丿嫳撆撇暼氕潎瞥肺苤蔽覕鐅",ai:"乂乃伌僾儗凒剀剴叆呃呆呝哀哎唉啀嗌嗳嘊噫噯埃堨塧壒奇娭娾嫒嬡崖嵦愛懓懝挨捱敱敳昹暧曖欬欸毐溰溾濭烠焥爱瑷璦癌皑皚皧瞹矮砹硋碍磑礙絠艾蔼薆藹諰譪譺賹躷醷鎄鑀锿閡阂阨阸隑隘霭靄靉餲馤騃鯦鱫鴱",nai:"乃佴倷哪奈奶妳嬭孻廼掜搱摨柰氖渿熋疓耏耐能腉艿萘螚褦迺釢錼鼐",wu:"乄乌五亡亾仡仵伆伍侉侮俉倵儛兀兦剭务務勿午吳吴吾呉呜唔啎喔嗚噁圬坞垭埡堥塢墲奦妩娒娪娬婺嫵寤屋屼岉峿嵍嵨巫幠庑廡弙御忢忤怃恶悞悟悮惡憮戊扜扝扤捂揾摀敄於旄无旿晤杅杇杌柮梧橆歍武毋母汙汚污沕洖洿浯渞渥溩潕烏焐無熃熓物牾玝珷珸瑦璑甒痦瞀瞴矹碔祦禑窏窹笏箼粅膴舞芜芴茣莁莫蕪蘁蜈蝥螐蟱誈誣誤譕诬误趶躌迕逜邬郚鄔釫鋈鋘鋙錻鎢钨铻阢陚隖雺雾霚霧霿靰騖骛鯃鰞鴮鵐鵡鶩鷡鹀鹉鹜鼯鼿齀齬龉",tuo:"乇他仛佗侂侻咃唾啴嘽坨堶妥媠嫷它岮庹彵惰托扡拓拕拖挩捝撱杔杝柁柝棁椭楕槖橐橢毤毻汑池沰沱涶牠狏砣砤碢磚稅税箨籜紽脫脱舃舄舵莌萚蘀蛇蟺袉袘袥訑託詑說説讬说跅跎踻軃迆迤迱酡鉈鋖铊阤陀陁隋飥饦馱馲駄駝駞騨驒驝驮驼魄魠鮀鰖鱓鴕鵎鸵鼉鼍鼧",zhe:"喆乇仛厇哲啠喆嗫嗻嘀嚞囁埑堵嫬庶悊慹扸折摂摄摺攝斥晢晣杔柘棏樀樜歽浙淛潪着矺砓磔籷粍者耷聂聑聶著蔗虴蛰蜇蟄蟅袩褚褶襵詟謫謶謺讁讋谪赭軼輒輙轍轶辄辙这這適遮銸鍺锗陬馲驝鮿鷓鷙鸷鹧",ma:"么亇傌吗呐唛嗎嘛嘜妈媽嫲嬤嬷孖尛抹摩杩榪溤犘犸獁玛瑪痲睰码碼礣祃禡罵蓦蔴蚂螞蟆蟇貉貊遤鎷閁靡馬駡驀马骂鬕鰢鷌麻麼麽",me:"么嚒嚜嚰孭庅濹癦麼麽",yao:"么乐仸侥倄偠傜僥匋吆咬啮喓嗂噛嚙垚堯夭妖姚娆婹媱嬈宎尧尭岆峣崾嶢嶤幺幼徭徺怮恌愮抭揺搖摇摿撽暚曜曣杳枖柼楆榚榣樂殀殽洮淫溔滛瀹烄烑熎燿爻狕猶猺獟玅珧瑤瑶由疟眑矅磘祅穾窅窈窑窔窯窰筄箹約繇纅约耀肴腰舀艞苭荛药葯葽蓔蕘薬藥蘨袎要覞訞詏謠謡讑谣趯踰軺轺遙遥邀銚鎐鑰钥铫闄陶隃靿顤颻飖餆餚騕驁骜鰩鳐鴁鴢鷂鷕鹞鼼齩",xi:"义习係俙傒僖兮凞匸卌卥卻厀吚吸呬呰咥咦咭唏唽喜嘻噏嚊嚱塈壐夕奊奚娭媐媳嬆嬉宩屃屎屖屣屭嵠嶍嶲巂巇希席廗徆徙徯忔忚忥怬怸恄息悉悕惁惜愾慀憘憙戏戯戱戲扱扸摡撕擊既昔晞晰晳暿曦杫析枲栖桸棲椞椺榽槢樨橀橲檄欪欯欷歖歙氣氥汐洒洗浠淅渓湿溪滊漇漝潝潟澙濕灑烯焁焈焟焬煕熂熄熈熙熹熺熻燍燨爔牺犀犔犠犧狶猎獡獻玺琋璽瓕瘜皙盻睎瞦矖矽硒碏磶礂禊禧稀稧穸窸粞糦系細綌緆縘縰繥繫纚细绤羛義羲習翕翖肸肹胁脅脇脋腊膝舃舄舾茜莃莔菥葈葸蒠蒵蓆蓰蔇蕮薂虩蜤蜥蜴蝷螅螇蟋蟢蠵衋袭裼褶襲西覀覡覤觋觹觽觿訢詑誒諰謑謚謵譆诶谥谿豀豨豯貕赥赩趇趘蹊蹝躧遟郄郋郗郤鄎酅醯釐釳釸鈒鈢鉨鉩銑錫錯鎴鏭鑴钑铣错锡闟阋隙隟隰隵雟雭霫霼飁餏餙餼饩饻騱騽驨鬩鯑鰓鰼鱚鳃鳛鵗鸂黖鼰鼳鼷",zhi:"之乿亊伎侄俧倁値值偫傂儨凪制剬劕劧卮厔只吱咥咫嚔址坁坧垁埃埴執墆墌夂多夛妷姪娡媞嬂实寘實峙崻巵帋帙帜幟庢庤廌彘徏徔徝徴徵志忮恃恉慹憄懥懫戠执扺扻抧抵拓拞挃指挚捗掷搘搱摕摨摭摯擲擳擿支斦旘旨昵晊智杝杫枝枳柣栀栉栺栽桎梔梽植椥楖榰槜樀樲樴櫍櫛止歭殖氏氐汁汥汦沚治泜洔洷淽滍滞滯漐潌潪瀄炙熫犆狾猘瓆瓡畤疐疷疻痔痣瘈直眰知砋礩示祁祇祉祑祗祬禃禔禵秇秓秖秩秪积秲秷稙稚稺穉窒筫紙紩絷絺綕緻縶織纸织置翐耆聀职職肢胑胝胵脂膣膱至致臷臸芖芝芷茋茝菭薙藢蘵虒蚔蛭蜘螲蟙衹衼袟袠製襧覟觗觝觯觶訨誌謢識识豑豒豸貭質贄质贽趾跖跱踬踯踶蹛蹠蹢躑躓軄軹軽輊轵轾迟迣遟遲郅郦酈酯釞鉄銍銴鋕鑕铁铚锧阤阯陁陟隲隻雉馶馽駤騭騺驇骘鯯鳩鳷鴙鴲鶨鷙鸠鸷黹鼅",zha:"乍偞偧冊册剳劄厏吒咋咤哆哳喋喥喳囃奓宱怍扎扠抯拃挓挿插揷揸搩搾摣擖札柞柤查柵栅楂榨樝渣渫溠潳灹炸煠牐猹甴痄皶皻眨砟笮箑箚紥紮耫膪苲苴蔖蕏藸蚱蚻蜡觰詐諎謯譇譗诈踷蹅軋轧迊醡鍘铡閘闸霅鞢馇鮓鮺鰈鲊鲝鲽齄齇齟齰龃",zuo:"乍佐作侳做凿咗唑嘬坐岝岞左座怍挫捽撮昨柞柮椊琢砟祚秨稓笮筰糳繓胙苲莋葃葄蓙袏諎酢醋鈼鑿阝阼飵",hu:"乎乕互俿冱冴匢匫呼和唬唿喖嗀嗃嘑嘝嚛囫垀壶壷壺姱婟媩嫭嫮寣岵帍幠弖弧忽怘怙恗惚戏戯戱戲戶户戸戽扈抇护搰摢擭斛昈昒曶枑核楛楜槲槴歑殻汩汻沍沪泘洿浒淈淲淴湖滬滸滹濩瀫烀焀煳熩狐猢琥瑚瓠瓡瓳礐祜穫笏箎箶簄粐糊絗綔縎縏縠羽胍胡膴舗芐芔芦芴苦苸萀葫蔛蔰虍虎虖虝蝴螜衚觳觷許謼護许豰軤轷鄠醐鈷鋘錿鍙鍸钴隺雇雐雽韄頀頶餬鬍魱鯱鰗鱯鳠鳸鴩鵠鶘鶦鶮鶻鸌鹄鹕鹘鹱",fa:"乏伐佱傠发垡姂廢彂拔拨撥栰橃汎沷法泛灋珐琺疺発發瞂砝笩筏罚罰罸茷蕟藅貶贬醗醱鍅閥阀髪髮",le:"乐了仂勒叻嘞忇扐楽樂氻泐牞玏砳竻簕肋艻阞韷餎饹鰳鳓",luo:"乐倮儸儽剆咯啰囉峈挼捋捰摞攎攞攭曪果格椤樂橐櫟欏欙泺洛漯濼烁烙爍犖猓猡玀珞瘰癳皪砢硌硦碌礫笿箩籮絡纙络罗羅脶腡臝茖荦萝落蓏蘿蛒蜾蝸螺蠃蠡袼裸覶覼詻跞路躒躶逻邏鉻鎯鏍鑼铬锣镙雒頱饠駱騾驘骆骡鮥鱳鵅鸁",yue:"乐刖哕哾噦囝块妁妜嬳岄岳嶽彟彠恱悅悦戉扚抈捳擽曰曱月枂栎樾櫟汋瀹烁焆爍爚玥矆矱礿禴箹篗籆籥籰粤粵約约臒药蘥蚎蚏蛻蜕蠖說説说越趯跀跃跞躍躒軏鈅鉞銳鋭鑠钥钺铄锐閱閲阅髺鸑鸙黦龠龥",pan:"乑伴冸判半卞叛坢姍姗媻审宷審幋弁彦扳拌拚搫攀柈槃沜泮洀湴溿潘瀊瀋炍爿片牉牓畔畨番皤盘盤盻盼眅眫碆磐磻籓縏繁胖膰般蒰螌蟠袢褩襻詊跘踫蹒蹣鄱鋬鎜鑻闆鞶頖鵥",yin:"乑乚伒众侌傿冘凐印吟听吲唫喑噖噾嚚囙因圁圻垔垠垦垽堙堷壹夤姻婣婬寅尹峾崟崯嶾币廕引愔慇慭憖憗懚斦朄栶梀檃檭檼櫽欭欽歅殥殷氤沂泿洇洕浔淫淾湚溵滛潭潯濥濦烎烟犾狺猌玪珢璌瘖瘾癊癮硍碒磤禋秵窨筃粌絪緸縯胤芩苂茚茵荫荶蒑蔩蔭蘟蚓螾蟫裀言訔訚訡訢誾諲讔赺趛輑鄞酓酳釿鈏鈝銀銦铟银闇闉阥阴陰陻隂隐隠隱霒霠霪靷鞇音韾飮飲饮駰骃鮣鷣齗齦龂龈",ping:"乒俜倗冖冯凭凴呯坪塀娉娦屏屛岼帡帲幈平慿憑枰檘泙洴涄淜焩玶瓶甁甹砯砰硑秤竮箳簈缾聠胓艵苹荓萍蓱蘋蚲蛢評评軿輧郱鉼頩馮鮃鲆",pang:"乓仿傍厐嗙夆嫎尨庞彭彷徬房方旁汸沗滂炐磅篣耪肨胖胮膀膖舽蒡螃蠭覫趽逄逢鎊镑雱霶髈鰟鳑龎龐",jiao:"乔交佼侥侨僑僥僬儌剿劋勦勪却卻叫呌咬喬嘂嘄嘐嘦噍噭嚼妖姣娇嫶嬌嬓孂学學峤峧嵺嶕嶠嶣徼恔悎憍憢憿挍挢捁搅摷撟撹攪敎教敥敫敽敿斠晈暞曒校椒樔橋櫵浇湫湬滘漖潐澆激灂灚烄焦焳煍燋狡獥珓璬皎皦皭矫矯礁稾穚窌窖笅筊簥糾絞繳纐纟纠绞缴胶脚腳膠膲臫艽芁茭茮菽萩蕉蕎藠虠蛟蟜蟭覐覚覺觉角訆譑譥賋趫趭跤踋蹻較轇轎轿较郊鄗酵醮釂釥鉸鐎铰餃饺驕骄骹鮫鱎鲛鵁鵤鷦鷮鹪",qiao:"乔侨俏偢僑僺削劁勪喬喿嘺噭塙墝墧墽壳嫶峤峭嵪嶠巧帩幓幧悄愀愁憔招捎搞摮撬撽敫敲校桥槗樵橇橋橾殼毃毳潐焦焳燆燋犞癄睄瞧硗硚硝碻磝磽礄礉窍窯竅箾繑繰缲翘翹茭荍荞菬蕉蕎藮蟜誚譑譙诮谯趫趬跤跷踃踍蹺蹻躈郻鄗鄡鄥醮釥銚鍫鍬鏒鐈鐰铫锹陗雀鞒鞘鞩鞽韒頝顤顦驕骄骹髚髜",guai:"乖叏哙噲夬怪恠拐掴枴柺箉罫",jue:"乙亅倔傕决刔劂勪匷厥叏吷啳嗟噘噱嚼埆壆夬妜孒孓屈屩屫崛崫嶡嶥弡彏憠憰戄抉挗捔掘撅撧攫斍柽桷橛橜欔欮殌氒決泬潏灍焆焳熦燋爑爝爴爵狂獗玃玦玨珏瑴璚疦瘚矍矞矡砄穱穴絕絶繑繘绝脚腳臄芵蕝蕞蕨虳蚗蛙蟨蟩蠼袦覐覚覺觉角觖觼訣誳譎诀谲貜赽趉趹蹶蹷蹻躩較较逫鈌鐍鐝钁镢镼闋闕阕阙鞒鞽駃騤骙髉鱖鳜鴂鴃鶌鷢龣",mie:"乜吀咩咪哶孭幭懱搣櫗滅瀎灭眜篾蔑薎蠛衊覕谂鑖鱴鴓",nie:"乜倪啮喦嗫噛嚙囁囐囓囡圼埝孼孽峊嵒嵲嶭巕帇幸惗捏捻掜揑摂摄摰攝敜枿棿槷櫱涅痆篞籋糱糵聂聶肀臬臲苶菍蘖蠥褹諗讘踂踗踙蹑躡鉨鉩銸鋷錜鎳鑈鑷钀镊镍闑陧隉顳颞齧",xiang:"乡亨享亯佭傢像儴勨勷厢向响啌啍嚮姠嶑巷庠廂忀想攘晑曏栙楿橡欀洋湘潒珦瓖瓨相祥箱絴緗纕缃缿羏翔膷舡芗萫葙薌蘘蚃蟓蠁衖襄襐詳详象跭迒郷鄉鄊鄕銄銗鋞鐌鑲镶閧闀闂降響項项飨餉饗饟饷香驤骧鬨鮝鯗鱌鱜鱶鲞鴹麘",dou:"乧侸兜兠凟剅吺唗投抖斗斣枓梪橷毭氀浢渎瀆痘瞗窦窬竇篼脰艔荳蔸蚪讀读豆逗逾郖都酘酡鈄鋀钭閗闘阧陡餖饾鬥鬦鬪鬬鬭",nang:"乪儾哝噥嚢囊囔崀憹搑擃攮曩欜涳瀼灢蘘蠰譨饢馕鬞齉",mai:"买佅劢勱卖咪哩唛嘪埋売派脈脉荬蕒薶衇貍買賣迈邁霡霢霾鷶麥麦",luan:"乱乿亂卵圝圞奱娈孌孪孿峦巒挛攣曫栾欒滦灓灤癴癵羉脔脟臠臡薍虊覶釠銮鑾鵉鸞鸾",ru:"乳侞偄儒入吺咮嗕嚅女如媷嬬孺嶿帤扖挐擩曘月杁桇檽汝洳渪溽濡燸獳筎縟繻缛肉肗臑茹蒘蓐蕠薷蠕袽褥襦辱込邚鄏醹銣鑐铷需顬颥鱬鳰鴑鴽",xue:"乴决削勪吷哮噱嚯坹壆学學岤峃嶨怴斈桖梋樰決泧泬泶滈澩瀥炔烕燢狘疦疶瞲穴膤艝茓蒆薛血袕觷謔谑趐踅轌辥雤雪靴鞾韡鱈鳕鷽鸴",sha:"乷倽傻儍刹剎厦唦唼啑啥喢嗄噎帹廈挱挲接摂摄摋攝杀杉榝樧歃殺沙濈煞猀痧砂硰箑粆紗繌繺纱翜翣莎菨萐蔱裟賒賖赊鎩铩閯閷霅霎魦鯊鯋鲨",na:"乸內内南吶呐呶哪嗱妠娜抐拏拿挐捺淰秅笚笝箬篛納絮纳肭蒘蒳衲袦訤詉誽豽貀蹃軜那郍鈉鎿钠镎雫靹魶",qian:"乹乾仟仱伣佥俔倩偂傔僉儙凄凵刋前千厱唊嗛圱圲堑塹墘壍奷婜媊嬱孅孯寨岍岒嵌嵰廞忏忴悓悭愆慊慳扦扲拑拪挳掔掮揃揵搴摼撁撍撖攐攑攓朁杄杴柑棈椠榩槏槧橬檶櫏欠欦欿歁歉歬汘汧浅涔淒淺渐湔漸潛潜濳濽灊灒炶煔熑燂燫牵牽犍皘竏筋签箝箞篏篟簽籖籤粁綪縴繾纤缱羟羥羬肷脥腱膁臤艌芊芡苂茜茾荕荨葥葴蒨蔳蕁藖虔蚈蚙蜸褰諐謙譴谦谴谸赶軡輤迁遣遷釺鈆鈐鉆鉗鉛銭鋟錎錢鍼鎆鏲鐱鑓鑯钎钤钱钳铅锓開阡雃靬韆顅馯騚騝騫骞鬜鬝鰜鰬鳒鳽鵮鶼鹐鹣黔黚齦龈",cui:"乼伜倅催凗啐啛墔察崒崔崪嶉忰悴慛摧椊榱槯毳淬漼濢焠熣獕琗璀疩瘁皠磪竁粋粹紣綷縗繀缞翆翠脃脆脺膬膵臎萃衰襊趡踤鏙隹顇",gui:"亀伪佹偽傀僞刽刿劊劌匦匭匮匱厬哇圭垝妫姽娃媯嫢嬀宄嶡嶲巂帰庋庪廆归恑摫撌攰攱昋晷朹柜桂桅桧椝椢概槣槶槻槼檜櫃櫰櫷歸氿沩洼湀溎潙炅炔珪瑰璝瓌癐癸皈瞆瞡瞶硅硊祈祪禬窐筀簂簋絵繪绘胿膭茥蓕蘬蛫螝蟡袿襘規规觖觤詭謉诡貴贵赽趹跪蹶軌轨邽郌閨闺陒隗雟鞼騩鬶鬹鬼鮭鱖鱥鲑鳜鳺鴂鴃龜龟",liao:"了佬僇僚劳勞嘹嫽寥寮尞尥尦屪嵺嶚嶛廖廫憀憭摎撂撩敹料暸樛漻潦炓燎爎爒獠璙疗療瞭窷竂簝繚缭聊膋膫蓼蟉蟟蟧豂賿蹘蹽轑辽遼鄝釕鏐鐐钌镠镣镽飂飉髎鷯鹩",zi:"事仔倳兹剚吇吱呰呲咨啙嗞姉姊姕姿子孖字孜孳孶崰嵫恣杍栥梓椔榟橴次沝泚洓淄渍湽滋滓漬澬牸玆璾甾疵眥眦矷禌秄秭秶稵穧笫籽粢紎紫緇缁耔胏胔胾自芓茈茊茡茲菑葘蓻薋虸觜訾訿諮谘貲資赀资赼趑趦跐載輜輺载辎鄑釨鈭鋅錙鍿鎡锌锱镃頾頿髭鯔鰦鲻鶅鼒齊齍齐齜龇",er:"二佴侕儿児兒刵咡唲嬭尒尓尔峏弍弐杒栭栮樲毦洏洱渪濡爾珥粫而耏耳聏胹臑荋薾衈袻誀貮貳贰趰輀輭轜迩邇鉺铒陑陾隭餌饵駬髵髶鮞鲕鴯鸸",chu:"亍俶傗储儊儲処出刍初助厨嘼埱处媰屮岀幮廚怵慉憷懨拀搐摢摴敊斶杵柠椘楚楮榋槒樗橱橻檚櫉櫖櫥欪歜涂淑滀滁濋炪犓珿琡璴畜矗础硫礎祝禇竌竐篨絀絮绌耝耡臅芻菆著蒢蒭蓫蕏藸處蜍蟵蠩褚觕触觸詘諔諸诎诸豖豠貙趎跦踀踰蹰躇躕鄐鉏鋤锄閦除雏雛鶵鸀黜齣齭齼",xu:"于亐伃休伵余侐俆偦冔勖勗卹叙吁呕呴呼咻喣嗅嘔嘘嘼噓圩垿墟壻妶姁姐婿媭嬃幁序徐怴怵恓恤惐慉戌掝揟敍敘旭旮旴昫晇暊朂朐栩楈槒欨欰欻歔歘殈汿沀洫浒淢湑溆滀滸漵潊烅烼煦獝珝珬畜疞盢盨盱眗瞁瞲矞砉稰稸窢籲糈絮続緒緖緰縃繻續绪续聟肷胊胥芋芌芧蒣蓄蓲蓿蕦藇藚虗虚虛蚼蛡蝑規规訏許訹詡諝諿謣謳譃讴许诩谞賉邪鄦酗醑鉥銊鑐雩需須頊须顼馘驉鬚魆魖魣鱮",kui:"亏傀刲匮匱卼喟喹嘳夔奎媿嬇尯岿巋巙悝愦愧憒戣揆晆暌楏楑樻櫆欳歸殨溃潰煃盔睽瞶磈窥窺篑簣籄缺聧聩聭聵胿腃膭臾葵蒉蒍蕢藈蘬蘷虁虧蝰觖謉跬踩蹞躨逵鄈鍨鍷鐀鑎闋闚阕隗頃頄頍頯顝顷餽饋馈馗騤骙魁",yun:"云伝傊允勻匀叞呍员員喗囩均夽奫妘媪媼孕尉尹怨恽惲愠愪慍抎抣昀晕暈枟榅樂橒殒殞氲氳沄涒涢温溳澐煇煴煾熅熉熨狁玧畇瘟盾眃磒秐筍筠筼篔紜緷緼縕縜繧纭缊耘耺腪芸苑荺菀蒀蒕蒷蕓蕰蕴薀藴蘊蜵蝹褞貟賱贇贠赟輼轀辒运運郓郧鄆鄖酝醖醞鈗鋆阭陨隕雲霣韗韞韫韵韻頵餫馧馻齫齳",sui:"亗倠哸嗺埣夊娞嬘尿岁嵗挼旞檖歲歳毸浽滖澻濉瀡煫熣燧璲瓍眭睟睢砕碎祟禭穂穗穟簑粋粹綏縗繀繐繸绥缞脺膸芕荽荾莎葰蓑虽襚誶譢谇賥遀遂遗遺邃鏸鐆鐩陏隊隋随隧隨雖靃鞖韢髄髓",gen:"亘哏揯搄根艮茛跟",xuan:"亘儇券吅咺喛喧塇夐妶姰媗嫙嬛宣弲怰悬愃愋懁懸揈揎撰擐旋昍昡晅暄暅暖暶梋楥楦檈泫洵涓渲漩澴炫烜煊煖狟獧玄玆玹琁琄瑄璇璿瓊痃癣癬盤眩眴睻矎碹禤箮絃絢絹縣縼繏绚绢翧翾萱萲蓒蔙蕿藼蘐蜁蜎蝖蠉衒袨諠諼譞讂谖贙軒轋轩选選還鉉鋗鍹鏇鐶铉镟镮鞙颴饌馔駨駽鰚",geng:"亙亢刯哽埂堩峺庚恆挭掶暅更梗椩浭焿畊硬絙絚綆緪縆绠羮羹耕耿莄菮賡赓邢郉郠頸颈骾鯁鲠鶊鹒",e:"亚亜亞伪佮侉俄偔偽僞僫匎匼卾厄吪呃呝咢咹哑哦唖啈啊啐啞噁噩囐囮垩垭埡堊堨堮妸妿姶娥娾娿婀媕屙屵岋峉峨峩崿庵廅恶悪惡愕戹扼搕搤搹擜曷枙椏櫮欸歞歹歺洝涐湂玀珴琧痷皒睋砈砐砨砵硆硪磀礘胺腭苊莪萼蒍蕚蘁蚅蛾蝁覨訛詻誐諤譌讍讹谔豟軛軶輵轭迗遌遏遻邑鄂鈋鋨鍔鑩锇锷閜閼阏阨阸阿隘頞頟額顎颚额餓餩饿騀鬲魤魥鰐鰪鱷鳄鴳鵈鵝鵞鶚鹅鹗齃齶齾",suo:"些傞唆唢嗍嗦嗩娑嫅岁嵗惢所抄挱挲摍暛桫梭歲沙溑溹牺犧獻琐琑瑣璅睃簑簔索縒縮缩羧莎莏葰蓑蜶衰褨趖逡逤鎈鎍鎖鎻鏁锁霍靃髿魦鮻",xie:"些亵伳偕偞偰僁儶写冩劦勰协協卨卸叶吤唏喈嗋噧垥塮夑夾奊契娎媟孈寫屑屓屜屟屧屭峫嶰廨徢恊愶慀懈拹挟挾接揳搚携摺撷擕擷攜斜旪暬枻桔械楔榍榝榭槷欸歇歙殺汁泄泻洩渫湝溃溉滊潰澥瀉瀣灺炧炨烲焎熁燮燲爕猲獬瑎眭碿祄禼糏紲絏絜絬綊緤緳繲纈绁缬缷翓耶胁脅脇脋膎薢薤藛蝎蝑蝢蟹蠍蠏血衺裌褉褻襭觟解觧諜諧謝譮讗谍谐谢豫跬躞躠迦邂邪鍱鐷隰鞋鞢鞵韰頁頡页颉骱鬹魼鮭鲑齂齘齛齥龤",zhai:"亝侧债側債厇厏啇嚌夈宅寨度抧择捚摘擇擿斋斎柴榸檡牴疵瘵砦祭窄箦簀粂翟膪責责鉙駘骀骴齋",tou:"亠偷偸埱头妵婾媮愉投敨斢殕紏綉緰绣蘣褕諭諳谕谙透逗鋀鍮钭頭飳骰黈",wen:"亠免刎吻呅呚呡問塭妏娩彣忞忟愠慍抆揾搵文昧昷桽榅榲歾殁殟汶渂温溫炆煴珳瑥璺瘒瘟眼砇稳穏穩笏紊紋絻緼縕纹缊聞肳脕脗芠莬蕰蕴薀藴蘊蚉蚊螡蟁褞豱輼轀辒鈫鎾閺閿闅闦问闻阌限雯韞韫顐饂馼魰鰛鰮鳁鳼鴍鴖鼤",wang:"亡亾仼兦匡妄尢尣尩尪尫彺往徃徍忘忹惘抂旺暀朚望朢枉棢汪瀇焹王琞皇盳網网罔芒莣菵蚟蛧蝄誷輞辋迋迬魍",gang:"亢伉冈冮刚剛堈堽岗岡崗戅戆戇扛抗掆杠棡槓港溝焵牨犅犺疘矼碙筻綱纲缸罁罓罡肛肮釭鋼鎠钢阬頏颃",kang:"亢伉匟囥坑奋嫝嵻康忼慷扛抗摃杭槺沆漮炕犺砊穅粇糠荒躿邟鈧鏮钪閌闶阬骯鱇",da:"亣剳匒呾咑哒嗒噠垯塌塔墶大妲怛憚打搨搭撘橽毼汏沓溚炟燵畗畣疸瘩眔矺笚笪答繨羍耷胆荅荙薘蟽褡觰詚跶躂达迏迖迭逹達鎉鎝鐽靼鞑韃龖龘",hai:"亥侅咍咳咴嗐嗨嘿嚡塰孩害拸欬氦海烸猲絯胲还還郂酼醢閡阂頦颏餀饚駭駴骇骸",heng:"亨佷哼啈堼姮恆恒悙桁横橫涥烆狟珩胻脝蘅行衡訇鑅鴴鵆鸻",peng:"亨倗傍傰剻匉嘭堋塜塳庄弸彭怦恲憉抨挷捧掽搒摓旁朋梈棚椖椪槰樥泙淎淜滂漨漰澎烹熢痭皏砰硑硼碰磞稝竼篣篷絣纄胓膨芃苹荓莑蓬蟚蟛踫軯軿輣輧迸逢逬錋鑝閛韸韼駍騯髼鬅鬔鵬鹏",mu:"亩仫凩募呒嘿坶墓墲姆姥娒婺峔幕幙慔慕拇暮木朷楘模樢母毣毪氁沐炑牟牡牧牳狇獏畆畒畝畞畮目睦砪穆縸繆缪胟艒苜茻莯萺蚞踇鉧鉬钼雮霂鞪",ting:"亭侱侹停厅厛听圢奠奵娗婷嵉庁庍庭廰廳廷忊挺桯梃楟榳汀涏渟濎烃烴烶珵珽町筳綎耓聤聴聼聽脡艇艼莛葶蜓蝏誔諪邒鋌铤閮霆鞓頲颋鼮",qin:"亲侵儭勤厪吢吣唚嗪噙坅埁埐堇墐媇嫀寑寝寢寴嵚嶔嶜庈廑廞忴慬懃懄扲抋捦揿搇撳擒斳昑梫槿橬檎櫬欽沁浸涁渗溱滲澿濅瀙珡琴琹瘽矜矝禽秦笉綅耹肣臤芩芹菣菦菳蓁蕲藽蘄蚙螓螼蠄衾衿覃親誛赺赾鈂鈊鈙鋟钦锓雂靲頜顉顩颌駸骎鬵鮼鳹",qing:"亲倩倾傾儬凊剠勍卿啨圊埥声夝媇寈庆庼廎情慶掅擎擏晴暒棾樈檠檾櫦殑殸氢氫氰涇淸清渹漀濪玪甠硘硜碃磬箐精綪綮罄胜苘莔葝蜻請謦请軽輕轻郬鑋靑青靘頃顷鯖鲭鶄黥",bo:"亳仢伯佛侼僠僰剝剥勃募博卜哱啵噃嚗壆妭孛孹嶓帗帛彴怕愽懪拍拔拨挬掰搏撥播擗擘暴服柏柭桲榑檗檘欂殕泊波泼浡淿渤湐潑潘瀑煿爆牔犦犻狛猼玻瓝瓟番癶發白百皪盋砵碆磻礡礴秡穛笩箔箥簙簸簿糪紴缽肑胉脖膊般舶艊艴苩茀茷菠菩葧蒲蔔蔢蕃薄薜蘖蘗蚾袚袯袹襎襏襮詙譒豰趵跑跛踣蹳郣鈸鉑鉢鋍鎛鑮钵钹铂镈餑餺饽馎馛馞駁駮驋驳髆髉魄鮁鮊鱍鲅鲌鵓鹁",zhan:"亶佔偡占噡嫸展崭嵁嶃嶄嶘嶦怗惉战戦戰拃搌斩斬旃旜栈栴桟棧椾榐橏欃毡氈氊沾湔湛澶琖皽盏盞瞻碊站粘綻绽菚薝蘸虥虦蛅袒襢覱詀詹謙譧譫讝谦谵趈跕蹍躔輚輾轏辗邅醆醮閚霑颤颭飐飦餰饘驏驙骣魙鱣鳣鳽鸇鹯點黵",lian:"亷令僆劆匲匳嗹噒堜奁奩娈媡嫾嬚孌帘廉怜恋慩憐戀挛搛摙撿攣敛斂梿楝槏槤櫣欄歛殓殮浰涟湅溓漣潋澰濂濓瀲炼煉熑燫琏瑓璉瞵磏稴簾籢籨練縺纞练羷羸翴联聨聫聮聯脸膦臁臉苓莲莶萰蓮蔹薕薟蘝蘞螊蠊裢裣褳襝覝謰譧蹥连連鄻醶錬鍊鎌鏈鐮链镧镰零鬑鰊鰱鱄鲢",duo:"亸仛兊兌兑凙刴剁剟剫吋咄哆哚喥嚉嚲垛垜埵堕墮墯多夛夺奪奲媠嫷尮崜嶞度惰憜挅挆捶掇揣敓敚敠敪朵朶杂杕枤柁柂柮桗棰椯橢毲沰沱沲澤痥硾綞缍舵茤袳裰詑誃貀趓跢跥跺跿踱躱躲軃郸鄲鈬錞鍺鐸铎锗陀陊陏隋隓飿饳馱駄驮鬌鮵鵽點",men:"亹们們怋悗悶惛懑懣扪捫暪椚殙汶満满滿焖燜玟玣玧璊瞞穈菛虋鍆钔門閅门闷鞔",ren:"人亻仁仞仭任儿刃刄壬妊姙屻忈忍忎恁扨朲杒栠栣梕棯涊牣秂秹稔紉紝絍綛纫纴肕腍芢荏荵菍葚衽袵訒認认讱躵軔轫釰鈓銋靭靱韌韧飪餁饪魜鵀",shen:"什伔伸侁侺信兟参參叄叅吲呻哂嘇堔妽姺娠婶嫀嬸孞审宷審屾峷幓弞愼慎扟抌抻搷昚曋柛棯椮椹榊槮氠沈涁淰深渖渗滲瀋燊珅甚甡甧申瘆瘮眒眘瞋瞫矤矧砷神祳穼籶籸糁紳綝绅罙罧肾胂脤腎莘葚葠蓡蔘薓蜃蜄裑覾訠訷詵諗讅诜谂谉身邥鉮鋠震頣駪魫鯅鯓鯵鰰鰺鲹鵢黮",ze:"仄伬侧側则則厕厠咋唶啧啫嘖夨嫧崱帻幘庂廁択择捑措擇昃昗柞樍歵汄沢泎泽溭滜澤灂皟睪瞔矠礋稄稷笮箦簀耫舴萚葃蔶蘀蠌襗諎謫謮讁谪責賾责赜迮飵鸅齚齰",jin:"仅今伒侭僅僸儘兓凚劤劲勁卺厪吟唫噤嚍埐堇堻墐壗妗婜嫤嬐嬧寖尽嶜巹巾廑惍慬搢斤斳晉晋枃榗槿歏殣津浕浸溍漌濅濜烬煡燼珒琎琻瑨瑾璡璶盡矜砛祲禁竻笒筋紟紧紾緊縉缙肋臸荕荩菫菳蓳藎衿襟覲觐觔訡謹谨賮贐赆近进進金釒釿鋟錦钅锓锦靳饉馑馸鹶黅齽",nu:"仅伖伮傉努呶奴孥帑弩怒搙擩砮笯胬褥詉駑驽",pu:"仆僕剝剥匍卜噗圃圑圤埔堡墣巬巭扑扶抪捗撲擈攴攵普暜暴曝朴柨樸檏氆浦溥潽濮瀑炇烳獛璞甫痡瞨砲秿穙箁纀脯舖舗苻荹莆菐菩葡蒱蒲蜅襆襥諩譜谱豧贌蹼酺鋪鏷鐠铺镤镨陠駇鯆鵏",ba:"仈伯八叐叭吧哱哵坝坺垻墢壩夿妭岜峇巴弝扒把抜抪拔捌捭朳杷柭欛湃灞炦爸犮玐疤癹皅矲笆笩粑紦罢罷羓耙胈芭茇茷菝萆蚆覇詙豝跁跋軷釛釟鈀钯霸靶颰魃魞鮁鮊鲃鲅鲌鼥",fo:"仏仸佛坲梻",tao:"仐匋叨咷啕夲夵套姚嫍幍弢慆抭挑掏搯桃梼槄檮洮涛涭淘滔濤焘燾瑫祹筹籌絛綢綯縚縧绦绸绹萄蜪裪討詜謟讨跳轁迯逃醄鋾錭陶鞀鞉鞱韜韬頫飸饀饕駣騊鼗",lun:"仑伦侖倫囵圇埨婨崘崙惀抡掄棆沦淪溣睔碖磮稐綸纶耣腀菕蜦論论踚輪轮錀陯鯩",cang:"仓仺伧倉傖凔匨嵢欌沧滄濸獊瑲篬罉臧舱艙苍蒼蔵藏螥賶鑶鶬鸧",chuang:"仓仺倉傸刅创刱剏剙創噇囪囱幢床怆愴戧摐朣橦漴漺牀牎牕疮瘡磢窓窗窻膧舂葱蔥闖闯",zai:"仔傤儎再哉在宰崽才扗栽洅渽溨災灾烖甾睵縡菑賳載载酨",ta:"他侤傝呾咜嗒嚃嚺塌塔墖太她它崉拓挞搨搭撘撻榙榻毾沓涾湿溚溻漯澾濌濕牠狧獭獺祂禢荅褟誻譶趿踏蹋蹹躢达迏迖逹達遝遢鉈錔鎉鎑铊闒闟闥闼阘鞈鞑鞜鞳韃鮙鰨鳎",xian:"仙仚伣伭佡俔僊僩僲僴先冼县咁咞咸哯唌啣嗛嘕垷埳堿壏奾妗妶姍姗姭姺娊娨娴娹婱嫌嫺嫻嬐孅宪寰尟尠屳岘峴崄嶮幰廯弦忺慊慳憪憲憸懢挦捍掀探揱搚搟撊撏攇攕显晛暹杴枮梘槏橌櫶欦毨氙洒洗涀涎湺溓澖濂瀗灑灦烍燹狝猃献獫獮獻玁现玹珗現甉痫癇癎盷省県睍瞯矣硍碱礆礥祆禒禰秈稴笕筅筧箲籼粯糮絃絤綅綖綫線縣縿繊纎纖纤线缐羡羨羬肩胁胘脅脇脋腺膁臔臤臽舷苋苮莧莶蔹薟藓藖蘚蘝蘞蚬蚿蛝蜆衔衘褼襳見见誢誸諴譀譣豏賢贒贤赻跣跹蹮躚軐軒輱轩酰醎醶釤銑銛銜鋧錎錟鍁鍌鏾鑦钐铣铦锨锬閑閒闞闲阚限陥险陷険險霰韅韯韱顈顕顯餡饀馅馦鮮鰔鱻鲜鶱鷳鷴鷼鹇鹹麙麲黹鼸",cha:"仛侘偛刹剎叉喳嗏嚓土垞奼姹察岎岔嵖差扠扱挿捈捷接插揷搽摖斜杈查査梌楂槎檫汊猹疀碴秅紁肞臿艖芆苴茬茶荖荼衩褨訍詧詫诧蹅釵銟鍤鎈鑔钗锸镲靫餷馇",hong:"仜厷叿吰吽哄哅唝嗊嚝垬妅娂宏宖屸巆弘彋愩揈撔晎汪汯泓洪浤浲港渱渹潂澋澒灴烘焢玒玜瓨硔硡竑竤篊粠紅紘紭綋红纮羾翃翝耾舼苰荭葒葓蕻薨虹訇訌謍讧谹谼谾軣輷轟轰鈜鉷銾鋐鍧閎閧闀闂闳霐霟鞃鬨魟鴻鸿黉黌",tong:"仝佟侗偅僮冂劏勭同哃嗵囲垌峂峒峝庝彤恫恸恿慟憅捅晍曈朣桐桶樋橦氃洞浵湩潼炵烔熥燑爞犝狪獞痌痛眮瞳砼硐硧秱穜童筒筩粡絧統綂统膧艟茼蓪蚒蜼蟲衕詷赨通酮重鉖鉵銅铜餇鮦鲖",han:"仠佄傼兯函凾厂厈含咁哻唅喊嚂圅垾娢嫨寒屽崡嵅嵌忓悍感憨憾扞捍撖撼攼旰旱晗晘晥暵桿梒椷榦欦歛汉汗汵泔浛浫涆涵淊淦滩漢澉澏澣瀚灘焊焓熯爳猂琀甘甝皔睅矸笒筨糮罕翰肣莟菡蔊蘫虷蚶蛿蜬蜭螒譀谽豃軒轩邗邯酣釬鈐銲鋎鋡钤閈闞闬阚雗靬韓韩頇頜頷顄顩顸颔馠馯駻鬫魽鳱鶾鼾",dai:"代侢傣叇呆呔嘚垈埭大岱帒带帯帶廗待怠懛戴曃柋棣歹殆毒汏瀻獃玳瑇甙箉簤紿緿绐艜蔕蚮蝳螮袋襶詒诒貸贷跢蹛軑軚軩轪迨逮逯遞遰隶霴靆馱駄駘驮骀鮘鴏黛黱",ling:"令伶倰冷凌刢另呤囹坽夌姈婈孁岭岺崚嶺彾怜拎掕昤朎柃棂棱櫺欞泠淩澪瀮灵炩燯爧狑玲琌瓴皊砱磷祾秢竛笭紷綾绫羚翎聆舲苓菱蓤蔆蕶蘦蛉衑袊裬詅跉軨輘酃醽釘鈴錂钉铃閝阾陵零霊霗霛霝靇靈領领駖魿鯪鲮鴒鸰鹷麢齡齢龄龗",chao:"仦仯剿劋勦吵唠嘮嘲巐巢巣弨怊抄摷晁朝槱樔欩涛漅潮濤炒焣焯煼牊眧窲粆紹綤綽縐繛绉绍绰罺耖觘訬謅謿诌超趠趫轈鄛鈔钞麨鼂鼌",chang:"仧伥倀倘倡偿僘償儻兏厂厰唱嘗嚐场場塲娼嫦尙尚尝常廠徜怅悵惝敞昌昶晿暢棖椙氅淌淐焻猖玚琩瑒瑺瓺甞畅畼肠脹腸膓苌菖萇蟐裮裳誯鋹鋿錩鏛锠長镸长閶闛阊韔鬯鯧鱨鲳鲿鼚",sa:"仨卅挲摋撒攃桬檫櫒殺泧洒潵灑纚脎萨蔡蕯薩訯躠鈒鎝鏾钑隡霅靸鞈颯飒馺",fan:"仮伋凡凢凣勫匥反噃墦奿婏嬎嬏嬔帆幡忛憣払拚攵旙旛杋柉梵棥楓樊橎氾汎泛渢滼瀪瀿烦煩燔犭犯犿璠畈畨番盕矾礬笲笵範籓籵緐繁繙羳翻膰舤舧舩范蕃薠藩蘩蟠蠜袢襎訉販贩蹯軓軬轓辺返釩鐇钒颿飜飯飰饭鱕鷭",miao:"仯吵喵妙媌嫹庙庿廟彯描杪淼渺猫玅眇瞄秒竗篎紗緢緲纱缈缪苗藐蜱訬邈鱙鶓鹋",ang:"仰卬岇昂昻枊盎肮醃醠骯",yang:"仰佒佯傟养劷勜卬咉坱垟央奍姎婸將岟崵崸徉怏恙慃懩扬抰揚攁敭旸昂昜映暘杨柍样楊楧様樣歍殃氜氧氱泱洋湯漾潒瀁炀炴烊煬珜瑒疡痒瘍癢眏眻礢禓秧紻羊羏羕羘羪胦英蛘詇詳諹详軮輰鉠鍈鍚鐊钖阦阳陽雵霙霷鞅颺飏飬養駚鰑鴦鴹鸉鸯",bi:"仳佊佖佛俾偪匂匕卑吡咇哔啚嗶坒埤堛壁复夶奰妣妼娝婢媲嬖嬶屄崥币幅幣幤庀庇庳廦弊弻弼彃彼必怭怶悂愊愎拂捭敝斃旇服朼枇枈柀柲梐椑楅檗殍比毕毖毙毴沘泌波湢滗滭潷濞煏熚狴獘獙珌璧畀畁畐畢疕疪痹痺皀皕瞥碧禆秕秘稫笓笔筆筚箃箄箅箆篦篳粃粊紕紴綼縪繴纰罷罼翍聛肶肸胇脾腗腷臂舭芘苾荜荸萆萞蓖蓽蔽薜蘗虑蜌螕袐被裨襅襞襣觱詖诐豍貏貱費賁贔贲费赑跛跸踾蹕躃躄辟逼避邲鄙鄨鄪鈚鉍錍鎞鏎鐴鐾铋閇閈閉閟闬闭陂陛陴鞁鞞鞸韠飶饆馝馥駜驆髀髲魓魮鮅鮩鰏鲾鴓鵖鶝鷝鷩鸊鼊鼻",wo:"仴倭偓卧唩喔嗌噁嚄埚堝夭婐婑媉媪媼幄我挝捰捼捾握撾擭斡杌枂楃沃涡涴涹渥渦濄濣焥猧瓁瘟瞃矆硪窝窩肟腛臒臥艧莴萵蒦薶蜗蝸踒踠雘馧齷龌龏",jian:"件侟俭俴倹偂健傔僣僭儉兼冿减前剑剣剪剱劍劎劒劔喊囏囝坚堅堑堿塹墹奸姦姧孱寋尖帴幵廴建弿彅徤惤戋戔戩戬拣挸捡揀揃揵搛撿擶攕旔暕朁枧柙柬栫梘检検椷椾楗榗槛樫橌橏橺檢檻櫼歼殱殲毽洊浅涀涧淺渐減湔湕溅滥漸澗濫濺瀐瀳瀸瀽煎熞熸牋牮犍猏玪珔瑊瑐监監睑睷瞯瞷瞼硷碊碱磵礀礆礛稴笕笺筧简箋箭箴篯簡籈籛糋絸緘縑繝繭纎纖纤缄缣翦聻肩腱臶舰艦艰艱茛茧荐菅菺葌葏葥蒹蔪蕑蕳薦藆虃螹蠒袸裥襇襉襺見覵覸见詃諓諫謇謭譖譼譾谏谫谮豜豣賎賤贱趝趼跈践踐踺蹇轞醎醶釰釼鈃鉴銒銭鋄鋑鋻錢錬錽鍊鍳鍵鎫鏩鐗鐧鐱鑑鑒鑬鑯鑳钘钱锏键閒間间险險靬鞬鞯韀韉餞餰饯馢騫骞鬋鰎鰔鰜鰹鲣鳒鳽鵳鶼鹣鹸鹹鹻鹼麉黚黬",mou:"件侔劺厶呣哞堥婺恈敄某桙毋洠牟眸瞴繆缪蛑蝥蟱袤謀谋鉾鍪鞪鴾麰",jia:"价伽佳假傢價加叚呷咖唊嘉嘏圿埉夏夓夹夾婽嫁宊家岬幏徦忦恝戛戞扴抸押拁拮挈挟挾揩揳擖斚斝暇架枷梜椵榎榢槚檟毠泇浃浹犌猰猳玾珈甲痂瘕稼笳筴糘耞胛脥腵茄荚莢葭蛱蛺蝦袈袷裌豭貑賈贾跏跲迦郏郟鉀鉫鉿鋏鎵钾铗铪镓頡頬頰颉颊餄饸駕駱驾骆骱鴶鵊麚",bin:"份傧儐宾彬摈擯斌椕槟殡殯氞汃浜滨濒濱濵瀕玢瑸璸砏繽缤膑臏虨蠙訜豩豳賓賔贇赟邠鑌镔霦頻顮频髌髕髩鬂鬓鬢",fen:"份偾僨分匪吩喷噴坆坋坟墳奋奔奮妢岎帉幩弅忿愍愤憤扮拚敃昐朆朌枌梤棻棼橨歕氛汾濆瀵炃焚燌燓燔獖玢盼瞓砏秎竕粉粪糞紛纷羒羵翂肦膹芬葐蒶蕡蚠蚡衯訜豮豶賁贲躮轒酚鈖錀鐼隫雰頒颁餴饙馚馩魵鱝鲼鳻黂黺鼖鼢",di:"仾低俤偙僀儥勺厎呧唙啇啲啻嘀嚁地坔坘坻埅埊埞堤墆墑墬奃娣媂嫡嵽嶳帝底廸弔弚弟弤彽怟慸扚抵拞掋提揥摕敌敵旳杓杕枤柢梊梑棣楴樀氐浟涤渧滌滴焍牴狄玓珶甋疐的眱睇砥碮碲磾祶禘笛第篴籴糴約締约缔羝翟聜肑胝腣芍苐苖荻莜菂菧蒂蓧蔋蔐蔕藋藡蚳蝃螮袛覿觌觝詆諟諦诋谛豴赿趆踧踶蹄蹏蹢軧迪逐递逓逮遞適遰邸釱鉪鍉鏑镝阺隄隶靮鞮頔題题馰骶髢鬄魡鯳鸐",fang:"仿倣匚坊埅堏妨彷房放方旊昉昘昞枋汸淓牥瓬眆眪祊紡纺肪舫芳蚄訪访趽邡鈁錺钫防雱髣魴鰟鲂鳑鴋鶭",pei:"伂佩俖倍呸啡坏垺培妃妚姵婄媐嶏帔怌抷掊攈斾旆昢柸棑毰沛浿淠犻珮琣琲笩肧胚艴茇茷蓜蜚衃裴裵賠赔轡辔配醅錇锫阫陪陫霈馷駍",diao:"伄佻倜凋刀刁刟叼吊奝嬥屌弔弴彫扚挑掉椆殦汈淍琱瘹瞗矵碉稠窎窵竨簓粜糶絩綢绸莜蓧藋虭蛁蜩訋誂調调貂赵趙跳踔軺轺釣鈟銱鋽錭鑃钓铞铫雕雿颩骠魡鮉鯛鲷鳥鳭鵃鵰鸟鸼鼦",xin:"伈伩信俽兴噷噺囟妡姰嬜孞寻尋庍廞心忻惞愖憖撢新昕杺枔橝欣欵款歀歆潃炘焮盺礥脪興舋芯莘薪衅襑訢訫軐辛邤釁鈊鋅鐔鑫锌镡阠顖馨馫馸鬵",xiu:"休俢修咻嗅嚊宿岫庥朽樇櫹溴滫烋烌煦珛琇璓秀糔綇綉繍繡绣羞脙脩臭臰臹苬茠莠蓨螑袖裦褎褏貅銝銹鎀鏅鏥鏽锈飍饈馐髤髹鮴鱃鵂鸺齅",tang:"伖倘偒傏傥儻劏唐啺嘡坣堂塘嵣帑弹愓戃扩搪摥擴攩曭棠榶樘橖欓汤淌湯溏漟漡烫煻燙爣瑭矘磄禟篖簜糃糖糛羰耥膅膛荡蓎蕩薚蘯蝪螗螳赯趟踼蹚躺逿鄌醣鎕鎲鏜鐋鐺钂铛铴镋镗閶闛闣阊隚鞺餳餹饄饧鶶黨鼞",huo:"伙佸俰剨劐化吙咊和咟嗀嚄嚯嚿夥奯姡惑或扮捇掝搉擭攉旤曤楇檴沎活湱漷濊濩瀖火灬焃獲瓠癨眓矆矐礊祸禍秮秳穫篧耠耯腘膕臛艧获萿蒦藿蠖諕謋豁豰貨货越趏過邩鈥鍃鑊钬锪镬閄隻雘霍靃騞魊",hui:"会佪僡儶匯卉叀咴哕喙嘒噅噕噦嚖囘回囬圚堕墮壞婎媈孈寭屷幑廆廻廽彗彙彚徊徻徽恚恛恢恵悔惠慧憓懳拻挥揮撝晖晦暉暳會桧椲楎槥橞檅檓檜櫘毀毁毇汇沬泋洃洄浍涣湏溃滙潓澮濊瀈灰灳烜烠烣烩煇煒燬燴獩珲琿璤璯痐瘣皓眭睢睳瞺禈秽穢篲絵繢繪绘缋翙翚翬翽芔茴荟蒐蔧蕙薈薉藱蘬蘳虫虺蚘蛔蛕蜖螝蟪袆褘襘詯詼誨諱譓譭譮譿讳诙诲豗賄贿輝輠辉违迴逥違銊鏸鐬闠阓隓隳靧鞼韋韢韦頮顪餯鮰鰴麾鼿齀",kuai:"会侩傀儈凷哙噲圦块塊墤巜廥快擓旝會浍澮狯獪璯筷糩脍膾蒉蒯蕢郐鄶駃鬠魁鱠鲙",kuo:"会刳哙噋噲廓懖扩拡括挄擴會栝桰漷濶燭爥秳筈萿葀蛞适邝鄺闊阔霩鞟鞹韕頢髺鬠",zu:"伜伹俎倅傶卆卒哫啐嘁岨崒崪徂怚族柤沮淬爼珇砠祖租稡箤紣組綷组苴菹葅蒩詛謯诅趱趲足踤踿蹴鉃鉏鉐錊鎐鎺鏃鑿镞阻靻顇駔驵",che:"伡俥偖勶呫唓喢坼多夛奲宅尺屮彻徹扯掣揊摰撤撦斥池澈烢烲焎爡瞮砗硨硩聅莗蛼詀謵車车迠頙",chen:"伧侲傖儭嗔嚫堪塡填塵墋夦宸尘帘忱愖抻捵揨敐晨曟枕桭棧棽榇樄橙櫬沈沉湛瀋烥煁琛疢疹瘎瘨眈瞋硶碜磣秤称稱綝縝缜肜胂臣茞莀莐蔯薼螴衬襯訦諃諶謓謲讖谌谶賝贂趁趂趻跈踸軙辰迧郴醦鈂鍖闖闯陈陳霃鷐麎齓齔龀",xun:"伨侚偱勋勛勲勳卂咰噀噚嚑坃埙塤壎壦奞姰孙孫寻尋峋巡巽廵彐徇循恂悛愻揗撏攳旬曛杊栒桪梭樳殉殾毥汛洒洵浔浚潭潯濬灥焄煇熏燂燅燖燻爋爓狥狻獯珣璕眴矄稄窨筍筼篔紃絢纁绚臐荀荤荨葷蔒蕁蕈薫薰蘍蟫蟳襑訊訓訙詢训讯询賐迅迿逊逡遁遜郇鄩醺鑂鑫顨馴駨驯鱏鱘鲟鶽",bai:"伯佰呗唄庍扒拜拝挀捭排掰摆擺敗柏栢派猈白百稗竡粨粺絔薜薭襬贁败鞁鞴韛",gu:"估傦僱凅劷古告呱咕哌唂唃啒嗀嗗嘏固堌夃姑嫴孤尳峠崓崮怘愲扢抇故枯柧梏棝榖榾橭櫎毂汩沽泒淈滑濲瀔焸牯牿瓠痼皋皷盬瞽硲磆祻稒穀笟箍箛篐糓縎罛罟羖股胍脵臌臯苦苽菇菰蓇薣蛄蛊蛌蠱角觚詁诂谷賈贾軱軲轂轱辜逧酤鈲鈷錮钴锢雇頋顧顾餶馉骨骰鮕鯝鲴鴣鵠鶻鸪鹄鹘鼓鼔",ni:"伱伲你倪儗儞児兒匿呢坭埿堄妮妳婗嫟嬭嬺孨孴尼屔屰嶷彌怩惄愵慝懝抐抳拟掜擬旎昵晲暱柅棿檷氼泥淣溺滠濔濘瀰灄狔猊痆眤睨祢禰秜籾縌聻胒腝腻膩臡苨薿蚭蛪蜺袮觬誽譺貎跜輗迡逆郳鈮鉨鑈铌镾隬霓馜鯢鲵麑齯",zhou:"伷侏侜倜僽冑周呪咒咮啁啄喌喙噣嚋妯婤宙州帚府徟扭掫昼晝晭柚椆注洀洲淍炿烐珘甃疛皱皺盩睭矪碡祝箒籀籒籕粙粥紂紬縐繇纣绉翢肘胄胕舟舳荮菷葤薵詋詶調諏謅譸诌诪诹调賙赒軸輈輖轴辀逐週郮酎鈾銂铀霌駎駲騆騶驟驺骤鬻鯞鵃鸼",qu:"伹佉佢刞劬匚匤匷区區厺去取句呿坥娶屈岖岨岴嶇巨弆忂怚憈戌戵抾敺斪曲朐欋欪毆氍浀淭渠灈焌璖璩癯瞿磲祛竘竬筁籧粬紶組絇组翑翵耝胊胠脥臞苣菃葋蕖蘧蚼蛆蛐蜡蝺螶蟝蠷蠼衐衢袪覰覷覻觑詓詘誇誳诎趋趍趜趣趨跔跙跼躣躯軀軥迲遽郥鉤鐻鑺閴闃阒阹鞠鞫駆駈騶驅驱驺髷魼鮈鰸鱋鴝鶌鸜鸲麮麯麴麹黢鼁鼩齲龋",ci:"伺佌佽偨兹刺刾厕厠司呰呲啙垐堲姕嬨嵯嵳差庛廁慈措朿枱柌柴栜栨次此泚滋澬濨玼珁瓷甆疵皉磁礠祠粢糍絘縒胔茈茦茨茲荠莿萕薋薺蚝蛓螅螆蠀詞词賜赐赼趀趑跐辝辞辤辭鈶雌飺餈骴髊鮆鴜鶿鷀鹚齹",beng:"伻俸傍傰唪嗙嘣埄埲堋塴奟崩嵭平抨挷搒旁榜泵漨熢琣琫甏甭痭祊絣綳繃绷菶蚌跰蹦迸逬錋鏰镚閍鞛",ga:"伽呷咖嘎嘠噶夹尕尜尬旮玍胳軋轧釓錷钆魀",chi:"佁侈侙俿傺剟勅匙卙卶叱叺吃呎呬呮呹哆哧啸啻喜喫嗤嘨嘯噄噭坘坻垑墀奓她妛媸尺屟岻弛彨彲彳徲恜恥慗慸憏懘扡抬抶拆拕拖拸持捇提搋摛摴攡敕斥杘柅柢樆欼歗歭歯汖池沱沶治泜淔湁滞滯漦灻炽烾熾狋瓻痓痴痸瘈瘛癡眙眵瞝祇离移竾笞筂箈箎篪粚糦絺翄翅翤翨耛耻肔胝胣胵脪腟芪茌茬荎莉菭蚇蚩蚳蛇蝭螭袲袳裭褫訵誀誃誺謘謻豉貾赤赿趍趐趩跅跢跮踅踟踶軧迟迡迣遅遟遫遲邌郗鉓鉹銐鍉離雴飭飾餝饎饬饰馳騺驪驰骊魑鳷鴟鵄鵣鶒鶗鶙鷘鸱麶黐齒齝齿",tian:"佃倎兲典吞呑唺嗔塡填天娗婖寘屇忝恬悿捵掭搷晪栝殄沺沾淟添湉滇琠瑱璳甛甜田甸町畇畋畑畠痶盷睓睼瞋碵磌窴紾緂胋腆舑舔舚苫菾蚕蚺覥觍賟酟鈿銛錪鍩鎭鎮钿铦锘镇闐阗靔靝靦顚顛颠餂鴫鷆鷏黇",tan:"但倓傝僋儃叹啴嗿嘆嘽嘾坍坛坦埮墰墵壇壜婒弹弾彈忐怹惔憛憳憻探掸摊撢撣擹攤昙暺曇榃橝檀歎毯沈淡湛湠滩漢潬潭澹灘炎炭璮痑痰瘫癉癱碳禪緂繵罈罎胆舑舔舕荨菼蕁蕈藫袒裧襢覃談譚譠谈谭貚貪賧贪赕郯醈醓醰鉭錟钽锬镡顃餤鷤黮",qia:"佉價冾卡咭圶客帢恰愘抲拤挈掐揢搳擖楬殎洽疴矻硈磍絜葜袷跒酠鞐髂鮚鲒",shao:"佋削劭勺卲召哨娋少弰招捎搜旓杓柖梢溲潲烧焼燒燿玿睄稍笤筲紹綃綤绍绡艄芍苕莦萔萷蕱蛸袑輎邵鞘鞩韒韶颵髾鮹",zhao:"佋兆召啁啅嘲垗妱巶找招旐昭晁曌朝枛桃棹櫂沼淖濯炤照燳爪爫狣瑵皽盄着瞾窼笊箌罀罩羄肁肇肈菬著蚤詔謿诏赵趙釗釽鉊鍣钊駋鮡鳭鼂鼌",ben:"倴喯坌夯夲奔奙捹撪本桳楍泍渀炃燌犇獖畚笨翉苯蟦賁贲輽逩錛鐼锛",ti:"体俶倜偍剃剔厗啑啼嗁嚏嚔奃姼媂媞屉屜崹嵜弚弟徥徲悌悐惕惖惿戻扌折挮掦提揥擿是替桋梯棣楴歒殢洟涕渧漽狄珶瑅瓋睇碮磃禵稊穉籊綈緹绨缇罤肆苐荑蕛薙虒蝭蟬衹裼褅褆詆諦謕诋谛趧趯跃踢踶蹄蹏躍躰軆达迏迖逖逷遆適醍銻錫鍗鐟锑锡題题騠骵體髢髰鬀鬄鮧鮷鯷鳀鴺鵜鶗鶙鷈鷉鷤鹈",he:"何佫劾合吓呙呵呼咊和咼哈哬啝喛喝嗃嗑嗬噈嚇垎壑姀害寉峆惒愒抲挌揭敆曷柇核格楁欱毼河洽涸渇渮渴湼澕焃煂熆熇燺爀犵狢癋皬盇盉盍盒硅碋礉禾秴篕籺粭紇繳纥缴翮翯苛荷菏萂藃藿蚵蝎螛蠚袔褐覈訶訸詥謞诃貈貉賀贺赫輅轄辂辖郃鉌鑉閡闔阂阋阖隺霍靍靎靏鞨頜颌餄餲饸鬩魺鲄鵠鶡鶮鶴鸖鹄鹖鹤麧齃齕龁龢",she:"佘厍厙奓奢射弽慑慴懾折抴拾挕捨揲摂摄摵攝檨欇歙涉涻渉滠灄猞畬畲睫碟磼社聂聶舌舍舎葉蔎虵蛇蛞蛥蠂設设賒賖赊赦輋闍阇鞨韘騇麝",tu:"余兎兔凃凸吐唋啚図图圖圗土圡堍堗塗墿宊屠峹嵞嶀庩廜徒怢悇捈捸揬摕斁杜梌檡汢涂涋湥潳瑹痜瘏禿秃稌突筡腞腯荼莵菟葖蒤趃跌跿迌途酴釷鈯鋀鋵鍎钍馟駼鵌鵚鵵鶟鷋鷵鼵",die:"佚叠咥哋啑喋垤堞峌崼嵽幉怢恎惵戜挃挕揲昳曡柣楪槢殜氎泆涉渉渫爹牃牒瓞畳疂疉疊眣眰碟窒絰绖耊耋胅至臷艓苵蜨蝶螲褋褶褺詄諜谍趃跌跕跮踢踮蹀蹛軼轶迭鐡鐵镻鞢鮙鰈鰨鲽鳎",gou:"佝傋冓勾区區句呴坸垢够夠姤媾岣彀抅拘搆撀构枸構沟泃溝煹狗玽笱篝簼緱缑耇耈耉苟茩蚼袧褠覯觏訽詬诟豰豿購购軥遘鈎鉤钩雊鞲韝鮈鴝鸜鸲",kou:"佝冦剾劶口叩妪嫗宼寇彄怐扣抠挎摳敂毆溝滱眍眗瞉瞘窛竘筘簆芤茠蔲蔻釦鏂鷇",ning:"佞侫儜冰凝咛嚀嬣宁寍寕寗寜寧年拧擰攘柠橣檸泞澝濘狞獰甯疑矃聍聹苧薴鑏鬡鬤鸋",yong:"佣俑傛傭勇勈咏喁嗈噰埇塎墉壅嫞容嵱庸廱彮怺恿悀惥愑愹慂慵拥揘擁柡栐槦永泳涌湧滽澭灉牅用甬痈癕癰砽硧禜筩臃臾苚蒏蕹蛹詠踊踴遇邕郺鄘醟銿鏞镛雍雝顒颙饔鯒鰫鱅鲬鳙鷛",wa:"佤凹劸咓哇唲啘嗗嗢姽娃娲媧屲帓徍挖搲攨汙汚污洼溛漥瓦瓲畖砙穵窊窐窪聉腽膃蛙袜襪譁邷靺鞋韈韎韤鮭鲑黳鼃",ka:"佧卡呿咔咖咯喀垰珈胩衉裃鉲",bao:"佨保儤刨剝剥勹勽包呆嘐嚗堡堢報媬嫑孢宀宝寚寳寶忁怉报抱暴曓枹瀑炮煲爆珤砲窇笣簿緥胞苞菢葆蕔薄藵虣蚫袌袍裒裦褒褓襃豹賲趵鉋鑤铇闁雹靌靤飹飽饱駂骲髱鮑鲍鳵鴇鸨齙龅",huai:"佪划咶喟嘳圳坏坯壊壞徊怀懐懷槐櫰淮瀤耲蘹蘾褢褱踝",lao:"佬僗僚劳労勞咾哰唠嗠嘐嘮姥嫪崂嶗恅憥憦捞撈撩朥栳橑橯浶涝潦澇烙牢狫獠珯痨癆硓磱窂簩粩絡络老耢耮荖落蓼蛯蟧軂轑酪醪銠鐒铑铹顟髝鮱",ming:"佲冥凕名命姳嫇慏掵明暝朙榠洺溟猽盟眀眳瞑茗萌蓂螟覭詺鄍酩銘铭鳴鸣",hen:"佷哏噷很恨拫掀狠痕艮詪鞎",quan:"佺全券劝勧勸卷啳圈圏圳埢姾婘孉峑巏巻弮恮悛惓拳拴捲搼权栒桊棬椦楾槫権權汱泉洤湶灥烇牶牷犈犬犭獾琯瑔甽畎痊矔硂筌純絟綣縓纯绻腃荃葲虇蜷蠸觠詮謜譔诠跧踡輇辁酄醛銓鐉铨闎韏顴颧駩騡鬈鰁鳈鸛鹳齤",tiao:"佻儵咷啁姚嬥宨岧岹庣恌挑斢旫晀朓朷条桃條樤眺祒祧稠窕窱笤粜糶絩聎脁脩艞芀苕萔蓚蓧蓨蜩螩覜誂調调超趒趠跳踔迢銚鋚鎥铫鞗頫髫鯈鰷鲦齠龆",xiao:"佼侾俏俲傚削効叜叟号呺呼咲咻哓哨哮唠唬啋啸嗃嘋嘐嘨嘮嘯嘵嚣嚻囂姣婋孝宯宵小崤庨彇恔恷憢挠捎揱搜撓撨效敩斅斆晓暁曉枭枵校梟梢橚櫹歊歒歗殽毊洨消涍淆滧漻潇潚澩瀟灱灲烋焇熇熽燆燺爻狡猇獟獢痚痟皛皢睄硝硣穘窙笑笹筱筿箫箾篠簘簫絞綃縿绞绡翛肖胶脩膮芍茭莦萧萷蕭薂藃虈虓蛸蟂蟏蟰蠨訤詨誟誵謏謞謼譊踃較轇较逍郩銷销霄颵騷驍驕骁骄骚骹髇髐魈鴞鴵鵁鷍鷕鸮",xing:"侀倖兴刑哘坓坙型垶塂姓娙婞嫈嬹巠幸形性悻惺擤星曐杏洐涬滎煋熒狌猩瑆皨省睲研硎硏箵篂緈胜腥臖興荇荥莕蛵行裄觪觲謃邢郉醒鈃鉶銒鋞钘铏陉陘餳饧騂骍鮏鯹",kan:"侃偘冚凵刊勘喊坎埳堪堿塪墈崁嵁嵌惂戡扻栞槛檻欿歁監看瞰矙砍碪磡竷莰莶薟衎譼輡輱轁轗闞阚靬顑餡馅龕龛",lai:"來俫倈勑厲唻娕婡崃崍庲徕徠懶攋来梾棶櫴涞淶濑瀨瀬猍琜癞癩睐睞筙箂籁籟莱萊藾襰誺賚賴赉赖逨郲釐錸铼頼顂騋鯠鵣鶆麳黧",hua:"侉划劃劐化华吪哇哗嘩埖姡婲婳嫿嬅学學崋找搳摦撶敌杹桦椛槬樺檴浍滑澅澮猾獪璍画畫畵砉硴磆稞粿糀繣腂舙花芲華蒍蕐蘤蘳螖觟話誮諙諣譁譮话豁輠釪釫鋘錵鏵铧驊骅魤鮭鲑鷨黊",kua:"侉咵垮夸姱恗挎晇楇絓胯舿華蕐袔誇跨銙錁锞顝骻髁",guang:"侊俇僙光咣垙姯广広廣恍扩挄撗擴桄横櫎欟洸潢灮炗炚炛烡犷獷珖硄胱臦臩茪趪輄迋逛銧黆",lie:"例倈儠冽列劣劦劽咧哷埒埓奊姴峢巁巤忚挒挘捩擸栗棙櫑毟洌浖烈烮煭燤爄爉犣猎猟獵睙綟聗脟膊臘茢蛚裂趔躐迾邋颲鬛鬣鮤鱲鴷",mi:"侎冖冞冪劘咪哋嘧塓孊宓宻密尒尓尔峚幂幎幦幺弥弭彌戂摩摵擟擵攠敉榓樒檷櫁汨沕沵泌洣淧渳溟滵漞濔濗瀰灖熐爢爾猕獯獼瓕眫眯眽瞇瞴祕祢禰秘穈簚籋米粎糜糸縻罙羃羋脒芈苾葞蒾蓂蔝蔤藌蘼蜜蝆袮覓覔覛觅詸謎謐谜谧辟迷醚醾醿釄銤鑖镾靡鸍麊麋麛鼏",an:"侒俺儑匼厂厈咹唵啽垵垾埯堓婩媕安屽岸峖干广庵按揞晻暗案桉氨洝犴玵痷盒盦盫碪罯胺腤荌菴萻葊蓭裺誝諳谙豻貋遃鉗銨錌钳铵闇陰隂隌雸鞌鞍韽頇頞顸馣鮟鴳鵪鶕鹌黯",lu:"侓僇六剹勎勠卢卤嗠噜嚕嚧圥坴垆塶塷壚娽峍庐廘廬彔录戮挔捋捛掳摅摝撸擄擼攄攎枦栌椂樐樚橹櫓櫨氇氌泸淕淥渌滤滷漉漊潞澛濾瀂瀘炉熝爐獹玈琭璐璷瓐甪瘳盝盧睩矑硉硵碌磠祿禄稑穋箓簏簬簵簶籙籚粶緑纑绿罏翏肤胪膔膚膟臚舮舻艣艪艫芦菉蓼蓾蔍蕗蘆虂虏虜螰蠦角觮觻谷賂赂趢路踛蹗輅轆轤轳辂辘逯鄜酪醁鈩錄録錴鏀鏕鏴鐪鑥鑪镥陆陸露顱颅騄騼髗魯魲鯥鱳鱸鲁鲈鴼鵦鵱鷺鸕鸬鹭鹵鹿麓黸",mao:"侔冃冇冐冒勖務卯堥夘媢峁嵍帽愗懋戼描旄昴暓枆楙毛毣毷氂泖渵牟牦犛猫獏瑁皃眊瞀矛秏笷緢罞耄耗芼茂茅茆萺蓩蛑蝐蝥蟊袤覒貇貌貓貿贸軞鄚鄮酕鉚鉾錨铆锚霿髦髳鶜",gong:"供公共功匑匔厷咣唝嗊塨宫宮工巩幊廾弓恭愩慐拱拲攻杛杠栱汞渱熕珙碽篢糼紅红羾肱虹蚣蛩觥觵貢贑贛贡赣躬躳輁銾鞏髸魟龏龔龚",cun:"侟刌吋墫存寸忖拵村洊浚澊皴竴籿踆蹲邨",lv:"侣侶偻儢勴卛卢吕呂哷垏壘娄婁寠寽屡屢履嵂庐廬律慮慺捋旅曥梠榈樓櫖櫚櫨氀氯滤焒爈率瘻盧瞜祣稆穞穭箻篓簍累絽綠緑縷繂绿缕膂膐膢葎蒌蔞藘虑褛褸謱軁郘鋁録鏤鑢铝镂閭闾馿驢驴魯鲁鷜鹿",zhen:"侦侲偵唇圳坫塡塦填姫嫃寊屒帧帪弫慎戡抮挋振揕搸敒敶斟昣朕朾枕枮栕栚桢桭椹楨榐榛槇樼殝沴沵浈湞溱滇潧澵獉珍珎瑧甄畛疹眕眞真眹砧碪祯禎禛稹竧箴籈紖紾絼縝縥纼缜聄胗臻萙葴蒖蓁薽蜄袗裖覙診誫謓诊貞賑贞赈趁趂軫轃轸辴迧遉酖酙針鈂鉁鋴錱鍖鍼鎭鎮针镇阵陣陳震靕駗鬒鮝鱵鲞鴆鸩黮黰鼎鼑",ce:"侧側冊册刂厕厠墄嫧帻幘廁恻惻憡拺敇柵栅测測畟笧策筞筴箣簎粣荝萗萴蓛赦齰",chai:"侪儕勑叉喍囆差扠拆搓查柴犲瘥祡茈茝蔕虿蠆袃訍豺釵钗齜龇",nong:"侬儂农咔哝噥廾弄憹挊挵欁浓濃癑禯秾穠繷脓膿莀蕽襛農辳醲齈",hou:"侯候厚后吼吽呴喉垕堠帿後洉犼猴瘊睺矦篌糇翭翵腄葔詬诟豞逅郈鄇銗鍭餱骺鮜鯸鱟鲎鲘齁",jiong:"侰僒冂冋冏囧坰垧埛宭扃扄昋泂浻澃瀅炅炯烱煚煛熒熲燑燛窘絅綗臦臩蘏蘔褧迥逈銄鎣顈颎駉駫",tui:"侻俀僓啍墤娧尵弚弟忒怢推橔煺稅税穨聉脫脮脱腿蓷藬蘈蛻蜕褪謉讉蹆蹪追退隤頹頺頽颓饋馈駾騩骽魋",nan:"侽南喃囝囡妠娚婻嫨弇戁抩揇摊攤暔枏枬柟楠湳滩灘煵男畘腩莮萳蝻諵赧遖难難颌",bian:"便匾卞变変封峅弁徧忭惼扁抃拚揙昪汳汴炞煸牑猵獱甂疺砭碥稨稹窆笾箯籩糄編緶缏编臱艑苄萹藊蝙褊覍覵變豍貶贬辡辦辧辨辩辫辮辯边遍邉邊邲釆鍽閞鞕鞭頨髟鯾鯿鳊鴘鶣",pian:"便偏囨媥平徧扁楄楩片犏猵璸篇緶缏翩胼腁萹蝙褊覑諚諞谝貵賆跰蹁辩辯駢騈騗騙骈骗骿魸鶣",chuo:"促吷啜嚽娕娖婥婼孎惙戳拺擉斫歠涰淖焯磭箹簇綴綽繛绰缀腏荃蔟趠趵跿踔踱躇輟辍辵辶逴酫醛鋜錣鏃鑡镞齪齱龊",ku:"俈刳古哭喾嚳圐圣堀崫库庫扝挎捁掘搰朏枯桍楛泏焅狜瘔矻硞秙窋窟絝绔胐苦袴裤褲趶跍跨郀酷骷鮬齁",jun:"俊儁军勻匀君呁均埈姰寯峻懏捃攈旬晙桾汮浚濬焌焞燇狻珺畯皲皸皹碅竣筠箘箟莙菌葰蔨蚐蜠袀覠訇軍郡鈞銁銞鋆鍕钧陖隽雋餕馂駿骏鮶鲪鵔鵕鵘麇麏麕龜龟",shun:"俊吮巛巡廵恂楯橓眴瞚瞤瞬舜蕣輴順顺鬊",lang:"俍勆哴唥啷埌塱嫏崀廊悢朖朗朤桹榔樃樠欴浪烺狼琅瑯硠稂筤羮羹脼艆莨蒗蓈蓢蜋螂誏踉躴郎郒郞鋃鎯锒閬阆駺",hun:"俒倱圂婚婫忶惛惽慁挥捆掍揮昆昏昬梡梱棍棔殙浑涽混渾湣湷溷焄焝珲琿眃睧睯緄緍緡繉绲缗荤葷蔒觨諢诨轋閽阍顐餛餫馄魂鼲",ying:"俓偀僌哽啨営嘤噟嚶塋夃央婴媖媵嫈嬰嬴孆孾嵤巆巊应廮影応愥應摬撄攍攖攚旲映景暎朠柍桜桯梬楹樱櫻櫿泂浧渶溁溋滎滢潁潆濙濚濴瀅瀛瀠瀯瀴灐灜焸煐熒營珱瑛瑩璎瓔甇甖甸瘿癭盁盈眏矨硬碤礯穎籝籯緓縄縈繩纓绬绳缨罂罃罌耺膡膺英茔荥荧莖莹莺萤营萦萾蓥藀蘡蛍蝇蝧蝿螢蠅蠳褮覮謍譍譻賏贏赢軈迎逞郢鎣鐛鑍锳霙鞕韹韺頴颍颕颖鱦鴬鶧鶯鷪鷹鸎鸚鹦鹰",su:"俗傃僁僳卹嗉嗖囌圱圲埣塐塑夙嫊宿愫愬憟捽搬摵梀棴榡樎樕橚櫯殐泝洬涑溯溸潚潥玊珟璛甦碿稡稣稤穌窣簌粛粟素縤縮缩肃肅膆苏莤蔌藗蘇蘓觫訴謖诉谡趚蹜速遡遬酥鋉餗驌骕鯂鱐鷫鹔",dao:"俦倒儔刀刂到受叨啁嘄噵壔宲导導屶岛島嶋嶌嶹帱幬忉忑悼惆捣捯搗擣朷椡槝檤檮氘洮涛濤焘燾瓙盗盜祷禂禱稲稻箌絩纛翢翿舠菿薵虭衜衟裯蹈軇道醻釖陦陶隝隯魛鱽鳥鸟",lia:"俩倆",pai:"俳哌啡徘拍排棑椑派湃牌犤猅箄簰脾腗蒎輫迫鎃",biao:"俵僄儦剽墂婊嫖幖彪徱摽杓标標檦淲滮漂瀌灬熛爂猋瘭穮篻脿膔膘臕苞蔈藨表裱褾諘謤贆錶鏖鏢鑣镖镳颮颷飆飇飈飊飑飙飚驃驫骉骠髟鰾鳔麃",fei:"俷剕匪厞吠啡墢奜妃婓婔屝废廃廢怫悱扉拂斐昲暃曊朏杮柹棐榧橃橨櫠沸淝渄濷犻狒猆琲疿痱癈砩祓笰篚紼緋绋绯翡肥肺胇胏胐腓芾茀茇菲萉蕜蕟蕡蜚蜰蟦裴裵裶襏誹诽費费鐨镄陫霏靅非靟飛飝飞餥馡騑騛髴鯡鲱鼣鼥",bei:"俻俾倍偝偹備僃北卑呗哱唄喺垻埤备孛怫悖悲惫愂憊揹昁杮杯柸桮梖棑棓椑波焙牬犕狈狽珼琲痺盃碑碚禙箃糒背臂苝茀菩萆萯葡蓓藣蛽蜚被褙襬誖諀貝贝跋軰輩辈邶鄁鉳鋇錍鐴鐾钡陂鞴骳鵯鹎",zong:"倊倧偬傯堫宗嵏嵕嵸從总惣惾愡捴揔搃摠昮朡枞棕椶樅潀潈潨熜熧燪猔猣疭瘲碂磫稯粽糉綜緃総緫緵縂縦縱總纵综翪腙艐葼蓗蓯蝬豵踨踪蹤錝鍯鏓鑁騌騣骔鬃鬉鬷鯮鯼",chui:"倕吹圌垂埀惙捶搥桘棰椎槌炊箠腄菙郵錘鎚锤陲顀鬌魋龡",zhui:"倕坠垂埀墜娷惴揣椎槌沝甀畷硾磓礈笍箠綴縋缀缒腏膇致萑諈贅赘轛追醀醊錐錗錣鎚鑆锥隊隧隹餟騅骓鵻",kong:"倥埪孔宆崆恐悾控椌涳矼硿穹空箜羫腔躻錓鞚鵼",juan:"倦劵勌勬卷呟圈圏埍埢奆姢娟嶲巂帣弮悁惓慻捐捲擐朘桊梋棬泫涓淃焆狷獧瓹甄眩眷睃睊睠絭絹縳绢罥羂脧腃臇菤萒蔨蕊蕋蜷蠲裐襈讂踡身鄄鋑鋗錈鎸鐫锩镌闂隽雋雟鞙韏飬餋鵍鵑鹃",song:"倯傱凇吅娀宋崧嵩嵷庺忪怂悚愯慫憁憽捒捴揔摗松枀枩柗梥棇楤檧淞漎濍硹竦耸聳菘蓯蘴蜙訟誦讼诵送鍶鎹锶頌颂餸駷鬆",cai:"倸偲啋埰婇寀彩戝才扐採揌材棌猜睬綵縩纔菜蔡裁財财跴踩采",ruan:"偄堧壖媆嫰愞撋朊檽渪濡燸瑌瓀碝礝緛耎腝蝡軟輭软阮需",chong:"偅傭僮充冲喠嘃埫宠寵崇崈徸忡憃憧揰摏樁沖浺涌漴潼烛爞珫痋盅祌种種緟罿翀舂艟茧茺虫蝩蟲衝褈蹖蹱酮重銃铳隀",chun:"偆僢唇堾媋惷旾春暙朐杶椿楯槆橁櫄沌浱淳湻滣漘犉瑃睶箺純纯肫胊脣膞芚莼萅萶蒓蓴蝽蠢賰踳輇輴辁醇醕錞陙鯙鰆鶉鶞鹑",re:"偌喏惹捼渃热熱若蹃",ruo:"偌叒婼嵶弱惹挼捼撋楉渃溺焫爇箬篛芮若蒻鄀鰙鰯鶸",dang:"偒儅党凼噹圵场垱場壋婸宕崵嵣当愓挡擋攩档檔欓氹潒澢灙烫燙珰瑒璗璫瓽當瘍盪瞊砀碭礑筜簜簹艡荡菪蕩蘯蟷裆襠譡讜谠趤逿鐺铛闣雼黨",huang:"偟兤凰喤堭塃墴奛媓宺崲巟幌徨怳恍惶愰慌揘晃晄曂朚楻榥櫎汻洸湟滉潢炾煌熀熿爌獚瑝璜癀皇皝皩磺穔篁簧縨肓艎芒茫荒葟蝗蟥衁詤諻謊谎趪遑鍠鎤鐄锽隍韹餭騜鰉鱑鳇鷬黃黄",zou:"偢奏媰掫揍搊族棷棸楱箃緅芻菆諏诹走赱辶邹郰鄒鄹陬騶驺鯐鯫鲰黀齱齺",duan:"偳剬塅媏彖断斷椴段毈煅瑖短碫端篅簖籪緞缎耑腶葮褍踹躖鍛鍴锻",ou:"偶区區吘吽呕嘔塸怄慪抠握摳敺櫙欧歐殴毆沤渥漚澫熰瓯甌紆纡耦腢膒蓲蕅藕藲謳讴遇醧鏂鴎鷗鸥齵",zan:"偺儧儹兂咱喒囋寁拶揝撍攒攢昝暂暫桚涔湔濺濽灒瓉瓒瓚禶穳篸簪簮糌臢襸讃讚賛贊赞趱趲蹔鄼酂酇錾鏨鏩鐕鐟饡",liu:"偻僂六刘劉嚠塯媹嬼嵧廇懰抡斿旈旒柳栁桞桺榴橊橮沠泖泵流浏游溜漻澑瀏熘熮珋琉瑠瑬璢畂畄留畱疁瘤癅硫碌磂磟綹绺罶羀翏聊膢蒌蒥蓅蓼蔞藰蟉裗蹓遛鉚鋶鎏鎦鏐鐂铆锍镏镠陆陸雡霤飀飂飅飗餾馏駠駵騮驑骝鬸鰡鶹鷚鹠鹨麍",lou:"偻僂喽嘍塿娄婁寠屚嵝嶁廔慺搂摟楼樓溇漊漏熡牢甊瘘瘺瘻瞜窶篓簍耧耬膢艛蒌蔞蝼螻謱軁遱鏤镂陋露鞻髅髏",sou:"傁凁叜叟嗖嗽嗾廀廋捒捜搜摗撨擞擻敕族棷櫢欶涑溲潚獀瘶瞍籔艘蒐蓃薮藪螋謏鄋醙鎪鏉锼颼颾飕餿馊騪",yuan:"傆允元冤剈原厡厵员咽員喛噮囦园圆圎園圓圜垣垸塬夗妧妴媛媴嫄嫚嬽宛寃弲怨悁惌愿捐掾援杬棩楥榞榬橼櫞沅涓涴淵渁渆渊渕湲源溒灁焆爰猨猿獂瑗盶眢禐穿笎箢緣縁缘羱肙芫苑葾蒝蒬薗薳蚖蜎蜵蝝蝯螈衏袁裫裷褑褤謜貟贠輐轅辕远逺遠邍邧酛鈨鋺鎱阮院陨隕願駌騵魭鳶鴛鵷鶢鶰鸢鸳鹓黿鼋鼘鼝",rong:"傇傛冗坈媶嫆嬫宂容峵嵘嵤嶸巆戎搈搑摉曧栄榕榮榵毧氄溶瀜烿熔爃狨瑢穁穃絨縙縟绒缛羢肜茙茸荣蓉蝾融螎蠑褣軵鎔镕隔頌颂駥髶",jiang:"傋僵勥匞匠塂壃夅奖奨奬姜将將嵹弜弶強强彊摪摾杢桨槳橿櫤殭江洚浆滰漿犟獎畕畺疅疆礓糡糨紅絳繮红绛缰翞耩膙茳葁蒋蔃蔣薑虹螀螿袶講謽讲豇酱醤醬降韁顜鱂鳉",hao:"傐儫号呺哠唬嗥嘷噑嚆嚎壕好妞恏悎昊昦晧暠暤暭曍椃毫浩淏滈滜澔濠灏灝獆獋皋皓皜皞皡皥睾秏竓籇翯耗聕膠臯茠蒿薃薅薧藃號虠蚝蠔諕譹豪貉郝鄗鎒鎬鐞镐顥颢鰝",shan:"傓僐僤儃儋凵删刪剡剼单単善單嘇圸埏墠墡壇姍姗嬗山嶦幓彡扇挻掞掸掺搀搧摻擅擔攙敾晱曏曑杉杣柵栅椫樿檀檆櫼汕潬潸澘澹灗炶烻煔煽熌狦猭珊疝痁睒磰禅禪穇笘笧縿繕纔缮羴羶脠膳膻舢芟苫葠蔪蟬蟮蟺衫襂襳覢訕謆譱讪贍赡赸跚軕邓邖鄯釤銏鐥钐閃閄閊闪陕陝顃顫颤饍騸骟髟鯅鱓鱔鱣鳝鳣",que:"傕决却卻埆塙墧屈崅悫愨慤搉攉敠榷殻毃汋決炔燩猎獡瘸皵硞确碏確碻礐礭缺舃舄芍蒛蚗趞踖躤闋闕阕阙隺雀鳥鵲鹊",nuo:"傩儺吶呐哪喏堧娜媠嫷愞懦懧挪掉掿搙搦搻梛榒橠毭渪稬穤糑糥糯耎袲袳諾诺蹃逽那郍鍩锘难難需",ca:"傪嚓囃拆擦攃橴磣礤礸蔡遪",can:"傪儏参參叄叅喰嘇噆囋嬠嬱孱嵾惨惭慘慙慚憯戔掺摲朁残殘淺湌澯灿燦爘璨穇篸粲薒蚕蝅蠶蠺謲蹔鏒飡飱餐驂骖鯵鰺鲹黪黲",lei:"傫儡儽勒卢厽咧嘞垒塁壘壨嫘擂攂樏檑櫐櫑欙泪洡涙淚漯灅瓃畾瘣癗盧矋磊磥礌礧礨祱禷类累絫縲纇纍纝缧罍羸耒肋脷腂蔂蕌蕾藟蘱蘲蘽虆蠝誄讄诔轠郲酹銇錑鐳鑘鑸镭雷靁頛頪類颣鱩鸓鼺",cao:"傮嘈屮嶆愺慅慒懆撡操曹曺槽漕澡糙肏艚艸艹草蓸螬褿襙造鄵鏪鐰騲鼜",zao:"傮凿唕唣喿噪慥早枣栆梍棗槽澡灶煰燥璅璪皁皂窖竃竈簉糟繅繰缫缲艁草薻藻蚤謲譟趮蹧躁造遭醩鑿",shuang:"傱双塽孀孇慡樉欆泷淙滝漺瀧灀爽礵縔艭鏯雙霜騻驦骦鷞鸘鹴",ao:"傲凹厫嗷嗸噢嚣嚻囂坳垇墺墽奡奥奧媪媼嫯岙岰嶅嶴廒慠懊扷抝拗摮擙敖柪梎棍泑浇滶澆澚澳熝熬爊獒獓璈眑磝磽礉翱翶翺聱芺蔜蝹螯袄襖謷謸軪遨郩鏊鏕鏖镺隞驁骜鰲鳌鴁鴢鷔鼇",piao:"僄剽勡嘌嫖彯徱慓摽旚朴殍漂潎犥瓢皫瞟磦票篻縹缥翲膘莩蔈薸螵謤醥闝顠飃飄飘驃驫骉骠髟魒",man:"僈埋墁姏嫚屘幔幕悗慢慲摱曼槾樠満满滿漫澫澷熳獌睌瞒瞞矕絻縵缦蔄蔓蘰蛮螨蟃蟎蠻襔謾谩蹒蹣鄤鏋鏝镘鞔顢颟饅馒鬗鬘鰻鳗",lan:"僋儖兰厱啉嚂囒坔壈壏婪嬾孄孏岚嵐幱廩廪惏懒懔懢懶拦揽擥攔攬斓斕暕栏榄欄欖欗浨涟湅滥漣漤澜濫瀾灆灠灡炼烂煉燗燣爁爛爤爦璼瓓礷篮籃籣糷繿纜缆罱葻蓝藍蘫蘭褴襕襤襴襽覧覽览諫譋讕谏谰躝郴醂鑭钄镧闌阑韊顲",zun:"僎僔噂墫奠尊嶟拵捘捽撙栫樽瀳繜罇袸譐跧踆蹲遵銌鐏鱒鳟鶎鷷",cuan:"僔巑撺攅攒攛攢昕櫕欑殩汆濽灒熶爨穳窜窾竄篡篹簒菆襸蹿躥鋑鑹镩",deng:"僜凳噔墱嬁嶝憕戥橙櫈澄灯燈璒登瞪磴竳等簦艠覴豋蹬邓鄧鐙镫隥",teng:"僜儯幐滕漛疼痋籐籘縢腾膯藤虅螣誊謄邆霯駦騰驣鰧鼟",tie:"僣占呫帖怗惵聑萜蛈蝶貼贴跕鉄鉆銕鋨鐡鐵铁锇飻餮驖鴩",ceng:"僧噌增层層嶒曾橧竲繒缯蹭驓",seng:"僧鬙",zen:"僭囎怎撍譖譛谮",min:"僶冧冺刡勄呡垊姄岷崏忞怋悯愍慜憫抿捪敃敏敯旻旼暋民汶泯渂湏湣潣玟珉琘琝瑉痻皿盷盿眠砇碈笢笽簢緍緡繩绳缗罠苠蠠賯鈱錉鍲閔閩闵闽鰵鳘鴖黽黾",sai:"僿嗮嘥噻塞思愢揌毢毸簑簺腮賽赛顋鰓鳃",tai:"儓冭台呔咍囼坮大太夳奤嬯孡忕忲态態抬擡斄旲枱檯汰泰溙漦炱炲燤珆箈籉粏肽胎能臺舦苔菭薹詒诒跆軚邰酞釐鈦鈶钛颱駘骀鮐鲐",meng:"儚冡勐夢夣嫇孟尨幪庬懜懞懵掹擝明曚朦梦橗檬氋氓溕濛猛獴瓾甍甿盟瞑瞢矇矒礞罞艋艨莔萌萠蒙蕄虻蜢蝱蟊蟒蠓鄳鄸鋂錳锰雺霚霥霧霿靀顭饛髳鯍鯭鱦鸏鹲黽黾鼆",qiong:"儝卭嬛宆惸憌桏橩焪焭煢熍琁琼璚瓊瓗睘瞏穷穹窮竆笻筇舼茕藑藭蛩蛬赹跫邛銎鞠",la:"儠剌啦喇嚹垃拉揦揧搚摺擸攋旯柆楋櫴溂爉瓎瘌癞癩砬磖翋腊臈臘菈落蓝藞蜡蝋蝲蠟辢辣邋鑞镴鞡鬎鯻鱲",du:"儥凟剢剫匵厾嘟噣土堵塗妒妬嬻宅帾度斁晵暏杜椟樚樞橐櫝殬殰毒涜渎渡瀆牍牘犊犢独獨琽瓄皾督睪睹秺竇竺笁笃篤纛肚芏荰蝳螙蠧蠹裻襡襩覩詫読讀讟诧读豄賭贕赌都醏錖鍍鍺鑟锗镀闍阇陼靯韇韣韥頓顿騳髑黩黷",long:"儱厐咙哢嚨垄垅壟壠宠寵屸嶐巃巄庞弄徿总拢攏昽曨朧栊梇槞櫳泷湰滝漋瀧爖珑瓏癃眬矓砻硦礱礲窿竉竜笼篢篭籠聋聾胧茏蕯蘢蝕蠪蠬衖襱谾豅贚躘鏧鑨陇隆隴霳靇驡鸗龍龐龒龓龙",rang:"儴勷嚷壌壤孃忀懹攘欀瀼爙獽瓤禳穣穰纕蘘蠰譲讓让躟鑲镶鬤",xiong:"兄兇凶匈哅夐宪忷恟敻昫汹洶焸熊胷胸芎訩詗詾讻诇賯赨雄",dui:"兊兌兑垖埻堆塠夺奪对対對嵟怼憝憞懟搥敦杸濧濻瀢瀩痽碓磓祋綐膭薱謉譈譵追鈗銳鋭錞鎚鐓鐜锐镦队陮隊頧鴭",rui:"兊兌兑內内叡壡婑惢抐撋枘桵棁橤汭瑞甤睿笍綏緌繠绥芮苼蕊蕋蕤蘂蘃蚋蜹踒鈉銳鋭鏸钠锐",ke:"克刻剋勀勊匼可呵咳喀嗑坷堁壳娔客尅岢峇嵑嵙嶱恪悈愘愙揢搕敤柯棵榼樖欬歁殻毼氪渇渴溘濭炣牁犐珂疴痾盍瞌砢硞碣碦磆磕礊礚科稞窠窼簻緙缂翗胢艐苛萪薖蚵蝌衉袔課课趷軻轲醘鈳鉿錁錒钶铪锕锞頦顆颏颗騍骒髁龕",nei:"內内哪娞婑氝浽脮腇那錗餒餧馁鮾鯘",shou:"兽収受售嘼垨壽夀守寿手扌授掱收敊涛涭濤熟狩獣獸痩瘦綬绶膄艏醻鏉首",ran:"冄冉卪呥嘫姌媣染柟橪然熯燃珃繎肰舑苒蒅蚦蚺衻袇袡蹨髥髯",gua:"冎刮剐剮劀卦叧呱咶咼啩坬寡惴括挂掛栝歄焻煱瓜絓緺罣罫胍舌苽褂詿諣诖趏踻銛銽铦颪颳騧鴰鸹",mei:"凂呅味嚜坆坶堳塺墨妹媄媒媚媺嬍寐嵄嵋徾抺挴攗攟昧枚某栂梅楣楳槑櫗毎每氼沒没沫沬浼渼湄湈溦煝煤燘猸玫珻瑂痗眉眊眛睂睸矀祙禖篃糜美羙脄脢腜膴苺莓葿蘪蝞袂谜跊躾郿酶鋂鎂鎇镁镅霉韎鬽魅鶥鹛黣黴",zhun:"准凖啍圫埻宒屯忳旽淳湻準甽盹稕窀純綧纯肫胗衠訰諄谆迍飩饨黱",cou:"凑奏揍族楱湊玼簇腠蔟薮藪趋趣趨輳辏",kai:"凯凱剀剴劾勓喝喫嘅噄垲塏奒嵦幆开忾恺愒愷愾慨揩暟核楷欬欯渇渴溘濭炌炏烗蒈衉豈輆鍇鎎鎧鐦铠锎锴開闓闿雉颽",guo:"划呙咶咼唬啯嘓囗囯囶囻国圀國埚埻堝墎崞帼幗彉彍惈慖掴搓摑敋果枸椁楇槨櫎活涡淉渦漍濄猓瘑矌簂粿綶聒聝腂腘膕菓蔮虢蜮蜾蝈蝸蟈蠃裹褁輠过過郭鈛錁鍋鐹锅锞餜馃馘",bie:"別别咇彆徶憋扒拔捌撆撇柭柲猰瘪癟秘穪苾莂蔽虌蛂蟞襒蹩鱉鳖鼈龞",pao:"刨包匏咆嚗垉奅庖抛抱拋摽泡炮炰爮犥狍瓟疱皰砲礟礮穮窌胞脟脬苞萢藨蚫袌袍褜謈跑軳鉋铇鞄颮飑鮑鲍麃麅麭",shua:"刷唆唰涮耍誜选選",cuo:"剉剒厝夎嵯嵳庴挫措搓摧撮昔最棤澨營瑳痤瘥睉矬磋縒脞莝莡蒫蓌蔖虘襊諎蹉躜躦逪遳酂酇醝銼錯锉错髊鹺鹾齹",pou:"剖吥咅哣垺培堷婄抔抙抱捊掊棓涪犃箁裒裦褒襃踣部郶錇锫颒",tuan:"剬剸团団圕團塼墥嫥專彖慱抟摶敦槫檲湍湪漙煓猯畽疃磚稅税篿糰蓴褍褖貒鏄鱄鶉鷒鷻鹑",qiang:"創勥呛哐唴啌嗆嗴墏墙墻嫱嬙将將嶈庆廧強强彊慶戕戗戧抢控搶摤摪斨枪椌槍樯檣殻溬漒炝熗爿牄牆猐獇玱琷瑲矼箐篬繈繦羌羗羟羥羫羻腔艢蔃蔷薔蘠蜣襁親謒跄跫蹌蹡錆鎗鏘鏹锖锵镪顩鶬鸧",zuan:"劗揝撮攒攢攥欑篹籫繤纂纉纘缵賺赚躜躦鑚鑽钻",keng:"劥吭坈坑奟妔忐挳揁摼殸牼硁硍硎硜硻胫脛誙踁鉺銵鍞鏗铒铿阬",gao:"勂吿告咎夰峼搞暠杲槀槁槔槹橰檺櫜浩滜澔獋獔皋皐睪睾祮祰禞稁稾稿筶篙糕縞缟羔羙膏臯菒蒿藁藳誥诰郜鋯鎬锆镐韟餻高髙鷎鷱鼛",weng:"勜嗡塕壅奣嵡暡滃瓮甕瞈罋翁聬蒙蓊蕹螉鎓鶲鹟齆",pin:"匕品嚬姘娉嫔嬪拚拼朩榀汖泵牝玭琕矉砏礗穦聘薲蘋貧贫頻顰频颦馪驞",nao:"匘呶垴堖夒婥嫐孬峱嶩巎巙怓恼悩惱憹挠撓橈檂浇淖澆猱獶獿瑙硇碙碯脑脳腝腦臑蛲蝚蟯詉譊鐃铙閙闹鬧",za:"匝咂咋咱啈啐喒嘁噈囃囋囐帀扎拶杂桚沞沯濽灒砸磼籴紥紮臜臢襍鉔雑雜雥韴魳",zang:"匨塟奘弉戕牂牫羘脏臓臟臧葬蔵藏賍賘贓贜赃銺駔驡驵髒",suan:"匴撰狻痠祘笇筭算篹蒜选選酸",nian:"卄哖唸埝姩年廿念拈捵捻撚撵攆榐涊淰溓痆碾秊秥簐粘艌蔫趁趂跈蹍蹨躎輦輾辇辗鮎鯰鲇鲶鵇黏",shuai:"卛帅帥摔率甩綏縗绥缞蟀衰",kun:"卵困坤堃堒壸壼婫尡崐崑悃捆昆晜梱涃混潉焜熴猑琨瑻睏硱祵稇稛綑罤臗菎蜫裈裍裩褌豤貇醌錕锟閫閸阃頑顽餛馄騉髠髡髨鯤鰥鲲鳏鵾鶤鹍齦龈",mang:"厖吂哤壾娏尨庬忙恾朚朦杗杧氓汒浝漭牤牻狵甿痝盲盳瞢硥硭笀芒茫茻莽莾蘉蛖蟒蠎邙釯鋩铓駹鸏鹲龍龒龙",zui:"厜咀嗺嘴噿堆嫢嶉嶊嶵摧撮晬最朘枠栬槯樶檇檌欈濢璻睟祽稡穝絊纗罪羧脧蕞蟕觜辠酔酨酻醉鋷錊雋",rou:"厹媃宍揉柔楺渘煣瑈瓇禸粈糅肉腬莥葇蝚蹂輮鍒鑐鞣韖騥髳鰇鶔",cen:"参參叄叅岑嵾梣汵涔硶穇笒篸膥",pa:"叭吧啪妑帊帕怕扒把掱杷汃派潖爬琶皅筢耙舥芭苩葩袙趴跁鈀钯",po:"叵哱嘙坡奤娝婆尀尃屰岥岶巿廹搫攴敀昢朴桲椺櫇泊泺泼洦淿湐溌溥潑濼烞猼珀皛皤破砶笸粕繁翍膊蒪蔢謈跛迫鄱酦醱釙鉕鏺钋钷陂霸頗颇馞駊髆魄",a:"吖呵啊嗄腌錒锕阿",tun:"吞吨吴呑啍噋囤坉屯庉忳憞旽暾朜氽汭沌涒炖焞燉畽窀純纯肫膯臀臋芚蜳褪豘豚軘逐錪霕飩饨魨鲀黗",pen:"吩呠喯喷噴本歕汾湓濆瓫盆翉翸葐衯",hang:"吭垳夯妔巷忼斻杭桁沆炕狼珩笐筕絎绗肮航苀蚢行貥迒邟酐頏颃魧",ne:"吶呐呢哪抐疒疔眲訥讷那",wai:"呙咼喎外夭崴歪瀤竵顡",n:"咹哏嗯",dei:"哋得",yo:"哟唷喲嚛育",o:"哦喔噢筽",sao:"哨埽嫂慅懆扫掃掻搔梢橾氉溞煰燥瘙矂縿繅繰缫缲臊鄵鐰颾騒騷骚髞鯵鰠鰺鱢鲹鳋",shuo:"哾嗍嗽妁搠数朔槊欶汋洬溯濯烁燿爍獡療矟硕碩箾药萷蒴藥說説说銏鎙鑠铄",en:"唔嗯奀峎恩摁煾蒽饐",huan:"唤喚喛嚾圂圜垸堚奂奐孉宦寏寰峘嵈巜幻患愌懁懽换換援擐攌桓梙槵欢欥歓歡汍洹浣涣渙漶潅澣澴灌烉焕煥犿狟獾环瑍瑗環瓛痪瘓皖眩睆睔瞏瞣糫絙綄緩繯缓缳羦肒脘荁萈萑蒝藧螌蠸讙豢豩豲貆貛輐轘还逭還郇酄鉮鍰鐶锾镮闤阛雈雚驩鬟鯇鯶鰀鲩鴅鵍鸛鹮鹳",nou:"啂嬬搙擩槈檽獳羺耨譨譳鎒鐞",ken:"啃垠垦墾恳懇掯狠珢硍肎肯肻裉褃豤貇錹頎颀齦龈",chuai:"啜嘬揣搋欼腄膗膪踹",se:"啬嗇塞寨廧愬懎拺擌栜槭歮歰泣洓涩渋渍溹漬澀澁濇濏瀒琗瑟璱瘷穑穡穯粣繬色蔷薔虩譅轖鉍銫鎍鎩鏼铋铩铯闟雭飋",sun:"喰孙孫巺扻损損搎摌树榫槂潠狲猻畃笋筍箰簨荪蓀蕵薞跣鎨隼飧飱餐鶽",hei:"嗨嘿嬒潶黑黒",dia:"嗲",de:"嘚地底得徳德恴悳惪棏淂登的鍀锝陟",zhuai:"嘬尵拽捙睉跩转顡",nin:"囜恁您拰脌",qun:"囷夋宭峮帬歏箘羣群裙裠踆輑逡遁麇麏麕",ri:"囸日氜釰鈤馹驲",zeng:"増增憎曽曾橧熷璔甑矰磳綜縡繒综缯罾譄贈赠鄫鋥锃鬷鱛",nv:"女恧朒沑狃籹絮聏肭衂衄釹钕",nuan:"奻暖渜湪濡煖煗餪",niu:"妞忸怓扭抝拗杻汼沑炄牛牜狃紐纽莥蚴鈕钮靵",rao:"娆嬈扰挠撓擾桡橈犪穘繚繞绕缭荛蕘蟯襓遶隢饒饶",shui:"娷帨挩捝水氵氺涗涚睡祱稅税脽裞說説誰说谁閖",nve:"婩疟瘧虐",nen:"媆嫩嫰恁枘腝臑",niao:"嫋嬝嬲尥尦尿樢溺脲茑茮蔦袅裊褭鳥鸟",kuan:"完宽寛寬梡棵欵款歀窽窾鑧顆颗髋髖",shuan:"專拴栒栓槫汕涮腨踹閂闩",zhua:"抓挝摣撾檛爪簻膼髽",sen:"掺摻森槮渗滲篸襂",shai:"摋攦晒曬殺筛篩簁簛籭繺色術諰酾閷",run:"撋橍润潤閏閠闰",neng:"竜而耐能螚",miu:"繆缪謬谬",gei:"给",zei:"蠈賊贼鯽鰂鱡鲗鲫"})};return h}));