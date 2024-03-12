"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[7340],{"./node_modules/date-fns/format.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GP:()=>format});const formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function buildFormatLongFn(args){return(options={})=>{const width=options.width?String(options.width):args.defaultWidth;return args.formats[width]||args.formats[args.defaultWidth]}}const formatLong={date:buildFormatLongFn({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:buildFormatLongFn({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function buildLocalizeFn(args){return(value,options)=>{let valuesArray;if("formatting"===(options?.context?String(options.context):"standalone")&&args.formattingValues){const defaultWidth=args.defaultFormattingWidth||args.defaultWidth,width=options?.width?String(options.width):defaultWidth;valuesArray=args.formattingValues[width]||args.formattingValues[defaultWidth]}else{const defaultWidth=args.defaultWidth,width=options?.width?String(options.width):args.defaultWidth;valuesArray=args.values[width]||args.values[defaultWidth]}return valuesArray[args.argumentCallback?args.argumentCallback(value):value]}}function buildMatchFn(args){return(string,options={})=>{const width=options.width,matchPattern=width&&args.matchPatterns[width]||args.matchPatterns[args.defaultMatchWidth],matchResult=string.match(matchPattern);if(!matchResult)return null;const matchedString=matchResult[0],parsePatterns=width&&args.parsePatterns[width]||args.parsePatterns[args.defaultParseWidth],key=Array.isArray(parsePatterns)?function findIndex(array,predicate){for(let key=0;key<array.length;key++)if(predicate(array[key]))return key;return}(parsePatterns,(pattern=>pattern.test(matchedString))):function findKey(object,predicate){for(const key in object)if(Object.prototype.hasOwnProperty.call(object,key)&&predicate(object[key]))return key;return}(parsePatterns,(pattern=>pattern.test(matchedString)));let value;value=args.valueCallback?args.valueCallback(key):key,value=options.valueCallback?options.valueCallback(value):value;return{value,rest:string.slice(matchedString.length)}}}const enUS={code:"en-US",formatDistance:(token,count,options)=>{let result;const tokenValue=formatDistanceLocale[token];return result="string"==typeof tokenValue?tokenValue:1===count?tokenValue.one:tokenValue.other.replace("{{count}}",count.toString()),options?.addSuffix?options.comparison&&options.comparison>0?"in "+result:result+" ago":result},formatLong,formatRelative:(token,_date,_baseDate,_options)=>formatRelativeLocale[token],localize:{ordinalNumber:(dirtyNumber,_options)=>{const number=Number(dirtyNumber),rem100=number%100;if(rem100>20||rem100<10)switch(rem100%10){case 1:return number+"st";case 2:return number+"nd";case 3:return number+"rd"}return number+"th"},era:buildLocalizeFn({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:buildLocalizeFn({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:quarter=>quarter-1}),month:buildLocalizeFn({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:buildLocalizeFn({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function buildMatchPatternFn(args){return(string,options={})=>{const matchResult=string.match(args.matchPattern);if(!matchResult)return null;const matchedString=matchResult[0],parseResult=string.match(args.parsePattern);if(!parseResult)return null;let value=args.valueCallback?args.valueCallback(parseResult[0]):parseResult[0];value=options.valueCallback?options.valueCallback(value):value;return{value,rest:string.slice(matchedString.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:value=>parseInt(value,10)}),era:buildMatchFn({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:index=>index+1}),month:buildMatchFn({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let defaultOptions={};function getDefaultOptions(){return defaultOptions}Math.pow(10,8);const millisecondsInDay=864e5;function toDate(argument){const argStr=Object.prototype.toString.call(argument);return argument instanceof Date||"object"==typeof argument&&"[object Date]"===argStr?new argument.constructor(+argument):"number"==typeof argument||"[object Number]"===argStr||"string"==typeof argument||"[object String]"===argStr?new Date(argument):new Date(NaN)}function startOfDay(date){const _date=toDate(date);return _date.setHours(0,0,0,0),_date}function getTimezoneOffsetInMilliseconds(date){const _date=toDate(date),utcDate=new Date(Date.UTC(_date.getFullYear(),_date.getMonth(),_date.getDate(),_date.getHours(),_date.getMinutes(),_date.getSeconds(),_date.getMilliseconds()));return utcDate.setUTCFullYear(_date.getFullYear()),+date-+utcDate}function differenceInCalendarDays(dateLeft,dateRight){const startOfDayLeft=startOfDay(dateLeft),startOfDayRight=startOfDay(dateRight),timestampLeft=+startOfDayLeft-getTimezoneOffsetInMilliseconds(startOfDayLeft),timestampRight=+startOfDayRight-getTimezoneOffsetInMilliseconds(startOfDayRight);return Math.round((timestampLeft-timestampRight)/millisecondsInDay)}function constructFrom(date,value){return date instanceof Date?new date.constructor(value):new Date(value)}function startOfYear(date){const cleanDate=toDate(date),_date=constructFrom(date,0);return _date.setFullYear(cleanDate.getFullYear(),0,1),_date.setHours(0,0,0,0),_date}function getDayOfYear(date){const _date=toDate(date);return differenceInCalendarDays(_date,startOfYear(_date))+1}function startOfWeek(date,options){const defaultOptions=getDefaultOptions(),weekStartsOn=options?.weekStartsOn??options?.locale?.options?.weekStartsOn??defaultOptions.weekStartsOn??defaultOptions.locale?.options?.weekStartsOn??0,_date=toDate(date),day=_date.getDay(),diff=(day<weekStartsOn?7:0)+day-weekStartsOn;return _date.setDate(_date.getDate()-diff),_date.setHours(0,0,0,0),_date}function startOfISOWeek(date){return startOfWeek(date,{weekStartsOn:1})}function getISOWeekYear(date){const _date=toDate(date),year=_date.getFullYear(),fourthOfJanuaryOfNextYear=constructFrom(date,0);fourthOfJanuaryOfNextYear.setFullYear(year+1,0,4),fourthOfJanuaryOfNextYear.setHours(0,0,0,0);const startOfNextYear=startOfISOWeek(fourthOfJanuaryOfNextYear),fourthOfJanuaryOfThisYear=constructFrom(date,0);fourthOfJanuaryOfThisYear.setFullYear(year,0,4),fourthOfJanuaryOfThisYear.setHours(0,0,0,0);const startOfThisYear=startOfISOWeek(fourthOfJanuaryOfThisYear);return _date.getTime()>=startOfNextYear.getTime()?year+1:_date.getTime()>=startOfThisYear.getTime()?year:year-1}function startOfISOWeekYear(date){const year=getISOWeekYear(date),fourthOfJanuary=constructFrom(date,0);return fourthOfJanuary.setFullYear(year,0,4),fourthOfJanuary.setHours(0,0,0,0),startOfISOWeek(fourthOfJanuary)}function getISOWeek(date){const _date=toDate(date),diff=+startOfISOWeek(_date)-+startOfISOWeekYear(_date);return Math.round(diff/6048e5)+1}function getWeekYear(date,options){const _date=toDate(date),year=_date.getFullYear(),defaultOptions=getDefaultOptions(),firstWeekContainsDate=options?.firstWeekContainsDate??options?.locale?.options?.firstWeekContainsDate??defaultOptions.firstWeekContainsDate??defaultOptions.locale?.options?.firstWeekContainsDate??1,firstWeekOfNextYear=constructFrom(date,0);firstWeekOfNextYear.setFullYear(year+1,0,firstWeekContainsDate),firstWeekOfNextYear.setHours(0,0,0,0);const startOfNextYear=startOfWeek(firstWeekOfNextYear,options),firstWeekOfThisYear=constructFrom(date,0);firstWeekOfThisYear.setFullYear(year,0,firstWeekContainsDate),firstWeekOfThisYear.setHours(0,0,0,0);const startOfThisYear=startOfWeek(firstWeekOfThisYear,options);return _date.getTime()>=startOfNextYear.getTime()?year+1:_date.getTime()>=startOfThisYear.getTime()?year:year-1}function startOfWeekYear(date,options){const defaultOptions=getDefaultOptions(),firstWeekContainsDate=options?.firstWeekContainsDate??options?.locale?.options?.firstWeekContainsDate??defaultOptions.firstWeekContainsDate??defaultOptions.locale?.options?.firstWeekContainsDate??1,year=getWeekYear(date,options),firstWeek=constructFrom(date,0);firstWeek.setFullYear(year,0,firstWeekContainsDate),firstWeek.setHours(0,0,0,0);return startOfWeek(firstWeek,options)}function getWeek(date,options){const _date=toDate(date),diff=+startOfWeek(_date,options)-+startOfWeekYear(_date,options);return Math.round(diff/6048e5)+1}function addLeadingZeros(number,targetLength){return(number<0?"-":"")+Math.abs(number).toString().padStart(targetLength,"0")}const lightFormatters={y(date,token){const signedYear=date.getFullYear(),year=signedYear>0?signedYear:1-signedYear;return addLeadingZeros("yy"===token?year%100:year,token.length)},M(date,token){const month=date.getMonth();return"M"===token?String(month+1):addLeadingZeros(month+1,2)},d:(date,token)=>addLeadingZeros(date.getDate(),token.length),a(date,token){const dayPeriodEnumValue=date.getHours()/12>=1?"pm":"am";switch(token){case"a":case"aa":return dayPeriodEnumValue.toUpperCase();case"aaa":return dayPeriodEnumValue;case"aaaaa":return dayPeriodEnumValue[0];default:return"am"===dayPeriodEnumValue?"a.m.":"p.m."}},h:(date,token)=>addLeadingZeros(date.getHours()%12||12,token.length),H:(date,token)=>addLeadingZeros(date.getHours(),token.length),m:(date,token)=>addLeadingZeros(date.getMinutes(),token.length),s:(date,token)=>addLeadingZeros(date.getSeconds(),token.length),S(date,token){const numberOfDigits=token.length,milliseconds=date.getMilliseconds();return addLeadingZeros(Math.trunc(milliseconds*Math.pow(10,numberOfDigits-3)),token.length)}},dayPeriodEnum_midnight="midnight",dayPeriodEnum_noon="noon",dayPeriodEnum_morning="morning",dayPeriodEnum_afternoon="afternoon",dayPeriodEnum_evening="evening",dayPeriodEnum_night="night",formatters={G:function(date,token,localize){const era=date.getFullYear()>0?1:0;switch(token){case"G":case"GG":case"GGG":return localize.era(era,{width:"abbreviated"});case"GGGGG":return localize.era(era,{width:"narrow"});default:return localize.era(era,{width:"wide"})}},y:function(date,token,localize){if("yo"===token){const signedYear=date.getFullYear(),year=signedYear>0?signedYear:1-signedYear;return localize.ordinalNumber(year,{unit:"year"})}return lightFormatters.y(date,token)},Y:function(date,token,localize,options){const signedWeekYear=getWeekYear(date,options),weekYear=signedWeekYear>0?signedWeekYear:1-signedWeekYear;if("YY"===token){return addLeadingZeros(weekYear%100,2)}return"Yo"===token?localize.ordinalNumber(weekYear,{unit:"year"}):addLeadingZeros(weekYear,token.length)},R:function(date,token){return addLeadingZeros(getISOWeekYear(date),token.length)},u:function(date,token){return addLeadingZeros(date.getFullYear(),token.length)},Q:function(date,token,localize){const quarter=Math.ceil((date.getMonth()+1)/3);switch(token){case"Q":return String(quarter);case"QQ":return addLeadingZeros(quarter,2);case"Qo":return localize.ordinalNumber(quarter,{unit:"quarter"});case"QQQ":return localize.quarter(quarter,{width:"abbreviated",context:"formatting"});case"QQQQQ":return localize.quarter(quarter,{width:"narrow",context:"formatting"});default:return localize.quarter(quarter,{width:"wide",context:"formatting"})}},q:function(date,token,localize){const quarter=Math.ceil((date.getMonth()+1)/3);switch(token){case"q":return String(quarter);case"qq":return addLeadingZeros(quarter,2);case"qo":return localize.ordinalNumber(quarter,{unit:"quarter"});case"qqq":return localize.quarter(quarter,{width:"abbreviated",context:"standalone"});case"qqqqq":return localize.quarter(quarter,{width:"narrow",context:"standalone"});default:return localize.quarter(quarter,{width:"wide",context:"standalone"})}},M:function(date,token,localize){const month=date.getMonth();switch(token){case"M":case"MM":return lightFormatters.M(date,token);case"Mo":return localize.ordinalNumber(month+1,{unit:"month"});case"MMM":return localize.month(month,{width:"abbreviated",context:"formatting"});case"MMMMM":return localize.month(month,{width:"narrow",context:"formatting"});default:return localize.month(month,{width:"wide",context:"formatting"})}},L:function(date,token,localize){const month=date.getMonth();switch(token){case"L":return String(month+1);case"LL":return addLeadingZeros(month+1,2);case"Lo":return localize.ordinalNumber(month+1,{unit:"month"});case"LLL":return localize.month(month,{width:"abbreviated",context:"standalone"});case"LLLLL":return localize.month(month,{width:"narrow",context:"standalone"});default:return localize.month(month,{width:"wide",context:"standalone"})}},w:function(date,token,localize,options){const week=getWeek(date,options);return"wo"===token?localize.ordinalNumber(week,{unit:"week"}):addLeadingZeros(week,token.length)},I:function(date,token,localize){const isoWeek=getISOWeek(date);return"Io"===token?localize.ordinalNumber(isoWeek,{unit:"week"}):addLeadingZeros(isoWeek,token.length)},d:function(date,token,localize){return"do"===token?localize.ordinalNumber(date.getDate(),{unit:"date"}):lightFormatters.d(date,token)},D:function(date,token,localize){const dayOfYear=getDayOfYear(date);return"Do"===token?localize.ordinalNumber(dayOfYear,{unit:"dayOfYear"}):addLeadingZeros(dayOfYear,token.length)},E:function(date,token,localize){const dayOfWeek=date.getDay();switch(token){case"E":case"EE":case"EEE":return localize.day(dayOfWeek,{width:"abbreviated",context:"formatting"});case"EEEEE":return localize.day(dayOfWeek,{width:"narrow",context:"formatting"});case"EEEEEE":return localize.day(dayOfWeek,{width:"short",context:"formatting"});default:return localize.day(dayOfWeek,{width:"wide",context:"formatting"})}},e:function(date,token,localize,options){const dayOfWeek=date.getDay(),localDayOfWeek=(dayOfWeek-options.weekStartsOn+8)%7||7;switch(token){case"e":return String(localDayOfWeek);case"ee":return addLeadingZeros(localDayOfWeek,2);case"eo":return localize.ordinalNumber(localDayOfWeek,{unit:"day"});case"eee":return localize.day(dayOfWeek,{width:"abbreviated",context:"formatting"});case"eeeee":return localize.day(dayOfWeek,{width:"narrow",context:"formatting"});case"eeeeee":return localize.day(dayOfWeek,{width:"short",context:"formatting"});default:return localize.day(dayOfWeek,{width:"wide",context:"formatting"})}},c:function(date,token,localize,options){const dayOfWeek=date.getDay(),localDayOfWeek=(dayOfWeek-options.weekStartsOn+8)%7||7;switch(token){case"c":return String(localDayOfWeek);case"cc":return addLeadingZeros(localDayOfWeek,token.length);case"co":return localize.ordinalNumber(localDayOfWeek,{unit:"day"});case"ccc":return localize.day(dayOfWeek,{width:"abbreviated",context:"standalone"});case"ccccc":return localize.day(dayOfWeek,{width:"narrow",context:"standalone"});case"cccccc":return localize.day(dayOfWeek,{width:"short",context:"standalone"});default:return localize.day(dayOfWeek,{width:"wide",context:"standalone"})}},i:function(date,token,localize){const dayOfWeek=date.getDay(),isoDayOfWeek=0===dayOfWeek?7:dayOfWeek;switch(token){case"i":return String(isoDayOfWeek);case"ii":return addLeadingZeros(isoDayOfWeek,token.length);case"io":return localize.ordinalNumber(isoDayOfWeek,{unit:"day"});case"iii":return localize.day(dayOfWeek,{width:"abbreviated",context:"formatting"});case"iiiii":return localize.day(dayOfWeek,{width:"narrow",context:"formatting"});case"iiiiii":return localize.day(dayOfWeek,{width:"short",context:"formatting"});default:return localize.day(dayOfWeek,{width:"wide",context:"formatting"})}},a:function(date,token,localize){const dayPeriodEnumValue=date.getHours()/12>=1?"pm":"am";switch(token){case"a":case"aa":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"});case"aaa":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return localize.dayPeriod(dayPeriodEnumValue,{width:"narrow",context:"formatting"});default:return localize.dayPeriod(dayPeriodEnumValue,{width:"wide",context:"formatting"})}},b:function(date,token,localize){const hours=date.getHours();let dayPeriodEnumValue;switch(dayPeriodEnumValue=12===hours?dayPeriodEnum_noon:0===hours?dayPeriodEnum_midnight:hours/12>=1?"pm":"am",token){case"b":case"bb":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"});case"bbb":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return localize.dayPeriod(dayPeriodEnumValue,{width:"narrow",context:"formatting"});default:return localize.dayPeriod(dayPeriodEnumValue,{width:"wide",context:"formatting"})}},B:function(date,token,localize){const hours=date.getHours();let dayPeriodEnumValue;switch(dayPeriodEnumValue=hours>=17?dayPeriodEnum_evening:hours>=12?dayPeriodEnum_afternoon:hours>=4?dayPeriodEnum_morning:dayPeriodEnum_night,token){case"B":case"BB":case"BBB":return localize.dayPeriod(dayPeriodEnumValue,{width:"abbreviated",context:"formatting"});case"BBBBB":return localize.dayPeriod(dayPeriodEnumValue,{width:"narrow",context:"formatting"});default:return localize.dayPeriod(dayPeriodEnumValue,{width:"wide",context:"formatting"})}},h:function(date,token,localize){if("ho"===token){let hours=date.getHours()%12;return 0===hours&&(hours=12),localize.ordinalNumber(hours,{unit:"hour"})}return lightFormatters.h(date,token)},H:function(date,token,localize){return"Ho"===token?localize.ordinalNumber(date.getHours(),{unit:"hour"}):lightFormatters.H(date,token)},K:function(date,token,localize){const hours=date.getHours()%12;return"Ko"===token?localize.ordinalNumber(hours,{unit:"hour"}):addLeadingZeros(hours,token.length)},k:function(date,token,localize){let hours=date.getHours();return 0===hours&&(hours=24),"ko"===token?localize.ordinalNumber(hours,{unit:"hour"}):addLeadingZeros(hours,token.length)},m:function(date,token,localize){return"mo"===token?localize.ordinalNumber(date.getMinutes(),{unit:"minute"}):lightFormatters.m(date,token)},s:function(date,token,localize){return"so"===token?localize.ordinalNumber(date.getSeconds(),{unit:"second"}):lightFormatters.s(date,token)},S:function(date,token){return lightFormatters.S(date,token)},X:function(date,token,_localize){const timezoneOffset=date.getTimezoneOffset();if(0===timezoneOffset)return"Z";switch(token){case"X":return formatTimezoneWithOptionalMinutes(timezoneOffset);case"XXXX":case"XX":return formatTimezone(timezoneOffset);default:return formatTimezone(timezoneOffset,":")}},x:function(date,token,_localize){const timezoneOffset=date.getTimezoneOffset();switch(token){case"x":return formatTimezoneWithOptionalMinutes(timezoneOffset);case"xxxx":case"xx":return formatTimezone(timezoneOffset);default:return formatTimezone(timezoneOffset,":")}},O:function(date,token,_localize){const timezoneOffset=date.getTimezoneOffset();switch(token){case"O":case"OO":case"OOO":return"GMT"+formatTimezoneShort(timezoneOffset,":");default:return"GMT"+formatTimezone(timezoneOffset,":")}},z:function(date,token,_localize){const timezoneOffset=date.getTimezoneOffset();switch(token){case"z":case"zz":case"zzz":return"GMT"+formatTimezoneShort(timezoneOffset,":");default:return"GMT"+formatTimezone(timezoneOffset,":")}},t:function(date,token,_localize){return addLeadingZeros(Math.trunc(date.getTime()/1e3),token.length)},T:function(date,token,_localize){return addLeadingZeros(date.getTime(),token.length)}};function formatTimezoneShort(offset,delimiter=""){const sign=offset>0?"-":"+",absOffset=Math.abs(offset),hours=Math.trunc(absOffset/60),minutes=absOffset%60;return 0===minutes?sign+String(hours):sign+String(hours)+delimiter+addLeadingZeros(minutes,2)}function formatTimezoneWithOptionalMinutes(offset,delimiter){if(offset%60==0){return(offset>0?"-":"+")+addLeadingZeros(Math.abs(offset)/60,2)}return formatTimezone(offset,delimiter)}function formatTimezone(offset,delimiter=""){const sign=offset>0?"-":"+",absOffset=Math.abs(offset);return sign+addLeadingZeros(Math.trunc(absOffset/60),2)+delimiter+addLeadingZeros(absOffset%60,2)}const dateLongFormatter=(pattern,formatLong)=>{switch(pattern){case"P":return formatLong.date({width:"short"});case"PP":return formatLong.date({width:"medium"});case"PPP":return formatLong.date({width:"long"});default:return formatLong.date({width:"full"})}},timeLongFormatter=(pattern,formatLong)=>{switch(pattern){case"p":return formatLong.time({width:"short"});case"pp":return formatLong.time({width:"medium"});case"ppp":return formatLong.time({width:"long"});default:return formatLong.time({width:"full"})}},longFormatters={p:timeLongFormatter,P:(pattern,formatLong)=>{const matchResult=pattern.match(/(P+)(p+)?/)||[],datePattern=matchResult[1],timePattern=matchResult[2];if(!timePattern)return dateLongFormatter(pattern,formatLong);let dateTimeFormat;switch(datePattern){case"P":dateTimeFormat=formatLong.dateTime({width:"short"});break;case"PP":dateTimeFormat=formatLong.dateTime({width:"medium"});break;case"PPP":dateTimeFormat=formatLong.dateTime({width:"long"});break;default:dateTimeFormat=formatLong.dateTime({width:"full"})}return dateTimeFormat.replace("{{date}}",dateLongFormatter(datePattern,formatLong)).replace("{{time}}",timeLongFormatter(timePattern,formatLong))}},dayOfYearTokenRE=/^D+$/,weekYearTokenRE=/^Y+$/,throwTokens=["D","DD","YY","YYYY"];function isDate(value){return value instanceof Date||"object"==typeof value&&"[object Date]"===Object.prototype.toString.call(value)}function isValid(date){if(!isDate(date)&&"number"!=typeof date)return!1;const _date=toDate(date);return!isNaN(Number(_date))}const formattingTokensRegExp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,longFormattingTokensRegExp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,escapedStringRegExp=/^'([^]*?)'?$/,doubleQuoteRegExp=/''/g,unescapedLatinCharacterRegExp=/[a-zA-Z]/;function format(date,formatStr,options){const defaultOptions=getDefaultOptions(),locale=options?.locale??defaultOptions.locale??enUS,firstWeekContainsDate=options?.firstWeekContainsDate??options?.locale?.options?.firstWeekContainsDate??defaultOptions.firstWeekContainsDate??defaultOptions.locale?.options?.firstWeekContainsDate??1,weekStartsOn=options?.weekStartsOn??options?.locale?.options?.weekStartsOn??defaultOptions.weekStartsOn??defaultOptions.locale?.options?.weekStartsOn??0,originalDate=toDate(date);if(!isValid(originalDate))throw new RangeError("Invalid time value");let parts=formatStr.match(longFormattingTokensRegExp).map((substring=>{const firstCharacter=substring[0];if("p"===firstCharacter||"P"===firstCharacter){return(0,longFormatters[firstCharacter])(substring,locale.formatLong)}return substring})).join("").match(formattingTokensRegExp).map((substring=>{if("''"===substring)return{isToken:!1,value:"'"};const firstCharacter=substring[0];if("'"===firstCharacter)return{isToken:!1,value:cleanEscapedString(substring)};if(formatters[firstCharacter])return{isToken:!0,value:substring};if(firstCharacter.match(unescapedLatinCharacterRegExp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+firstCharacter+"`");return{isToken:!1,value:substring}}));locale.localize.preprocessor&&(parts=locale.localize.preprocessor(originalDate,parts));const formatterOptions={firstWeekContainsDate,weekStartsOn,locale};return parts.map((part=>{if(!part.isToken)return part.value;const token=part.value;(!options?.useAdditionalWeekYearTokens&&function isProtectedWeekYearToken(token){return weekYearTokenRE.test(token)}(token)||!options?.useAdditionalDayOfYearTokens&&function isProtectedDayOfYearToken(token){return dayOfYearTokenRE.test(token)}(token))&&function warnOrThrowProtectedError(token,format,input){const _message=function message(token,format,input){const subject="Y"===token[0]?"years":"days of the month";return`Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(token,format,input);if(console.warn(_message),throwTokens.includes(token))throw new RangeError(_message)}(token,formatStr,String(date));return(0,formatters[token[0]])(originalDate,token,locale.localize,formatterOptions)})).join("")}function cleanEscapedString(input){const matched=input.match(escapedStringRegExp);return matched?matched[1].replace(doubleQuoteRegExp,"'"):input}}}]);