require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
var parseArgs = require('minimist')

var $ = jQuery = require('jquery');
const csv = require('csv-parser');
var file = require('file-system');
var fs = require('fs');

const path = require("path")

const cheerio = require('cheerio');

const request = require('request');

const translate = require('@k3rn31p4nic/google-translate-api');

var XLSX = require('xlsx')

//const shell = require('shelljs')
var cp = require('child_process');

var currentDate = new Date().getDay();
var currentHour = new Date().getHours();
var currentMin = new Date().getMinutes();
var currentSec = new Date().getSeconds();

const koda = '153337601879834624';
const mayo = '146730334065655808';

var dice = 0;

const pathToFileBot = path.join("C:/Users/"placeholder"/Google Drive/Bot", "prices.txt")

const pathToNewDestinationLatest = path.join("C:/Users/"placeholder"/Documents/Discord_Bot/TurtleBot/Price lists/Latest", "prices.txt")

const pathToFileLatest = path.join("C:/Users/"placeholder"/Documents/Discord_Bot/TurtleBot/Price lists/Latest", "prices.txt")

const pathToNewDestinationOutdated = path.join("C:/Users/"placeholder"/Documents/Discord_Bot/TurtleBot/Price lists/Outdated", "prices.txt")


/** Proposed auto reset, doesnt work
 var testing = [];

 var stats = fs.statSync('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');

 var statsTest = fs.statSync('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');

 statTester = statsTest.mtime.toString();

 statz = stats.mtime.toString();

 testing.push(statTester);


 var interval = setInterval (function (){
	console.log("array " testing);
	console.log("stats " stats.mtime.toString);
	console.log("statsTest " statsTest.mtime.toString);

}
 },5000);
 */

var statsTest = fs.statSync('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');

var statTester = statsTest.mtime.toString();

file.readFile === fs.readFile

const prefix = "!"

var newPriceMem; //new
var newPriceRelic;
var newPriceConc;
var newPriceCres;
var newPriceDisto;

var oldPriceMem; //old
var oldPriceRelic; 
var oldPriceConc;
var oldPriceCres;
var oldPriceDisto;

var workbookPrice = XLSX.readFile('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
var sheet_name_list_price = workbookPrice.SheetNames;
var xlDataPrice = XLSX.utils.sheet_to_json(workbookPrice.Sheets[sheet_name_list_price[0]]);

var reactionTest = "";

client.on('ready', () => {
	
	var onlineWhale = 0;
	var onlineChin = 0;
	var onlineCow = 0;
	
	var interval2 = setInterval(function () {
		//Whale online/offline
		if(client.users.cache.get('727439807453855754').presence.status === "online" && onlineWhale != 1){
			console.log(`${client.users.cache.get('727439807453855754').tag}` + " Is Online")
			onlineWhale = 1
		}
		if(client.users.cache.get('727439807453855754').presence.status === "offline" && onlineWhale == 1) {
			console.log(`${client.users.cache.get('727439807453855754').tag}` + " Is Offline")
			onlineWhale = 0
		}
		//Chin online/offline
		if(client.users.cache.get('131078703831580672').presence.status === "online" && onlineChin != 1){
			console.log(`${client.users.cache.get('131078703831580672').tag}` + " Is Online")
			onlineChin = 1
		}
		if(client.users.cache.get('131078703831580672').presence.status === "offline" && onlineChin == 1) {
			console.log(`${client.users.cache.get('131078703831580672').tag}` + " Is Offline")
			onlineChin = 0
		}
		//Cow online/offline
		if(client.users.cache.get('109690538692730880').presence.status === "online" && onlineCow != 1){
			console.log(`${client.users.cache.get('109690538692730880').tag}` + " Is Online")
			onlineCow = 1
		}
		if(client.users.cache.get('109690538692730880').presence.status === "offline" && onlineCow == 1) {
			console.log(`${client.users.cache.get('109690538692730880').tag}` + " Is Offline")
			onlineCow = 0
		}
	  },1000);
	
	/**
	Code below gets a cached message, this can be used to then see if that message has reaction applied to it or not. This can be used mainly for auto role assigned via reactions
	*/
	const channel = client.channels.cache.get("727863842645868555"); //Channel ID
	const msg = channel.messages.cache.get('736547639415275522'); //Message ID
  
	channel.messages.fetch("736547639415275522").then(msg => console.log("Message found for reactions"));
				
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity("Just a casual Turtle" , {type: 'STREAMING', url: 'https://www.twitch.tv/blackdesertonlineofficial'} );

    console.log("Marker Place timer has started. It will update in 13mins! " + currentHour + ":" + currentMin + ":" + currentSec);

    for (var i = 0; i < xlDataPrice.length; i++) {
        if (xlDataPrice[i].name.includes("Memory Fragment")) {
            var memPriceChangeOld = xlDataPrice[i].price;
            oldPriceMem = memPriceChangeOld;
            console.log("Current Price for Memory Fragments " + oldPriceMem.toLocaleString());
        }
		if (xlDataPrice[i].name.includes("Ancient Relic Crystal Shard")) {
            var relicPriceChangeOld = xlDataPrice[i].price;
            oldPriceRelic = relicPriceChangeOld;
            console.log("Current Price for Ancient Relic Crystal Shard " + oldPriceRelic.toLocaleString());
        }
		if (xlDataPrice[i].enhancement == 4) {
			if (xlDataPrice[i].name.includes("Ring of Crescent Guardian")) {
				var cresPriceChangeOld = xlDataPrice[i].price;
				oldPriceCres = cresPriceChangeOld;
				console.log("Current Price for Ring of Crescent Guardian " + oldPriceCres.toLocaleString());
			}
			if (xlDataPrice[i].name.includes("Black Distortion Earring")) {
				var distoPriceChangeOld = xlDataPrice[i].price;
				oldPriceDisto = distoPriceChangeOld;
				console.log("Current Price for Black Distortion Earring " + oldPriceDisto.toLocaleString());
			}
		}
    }

    var interval = setInterval(function () {
        var workbook = XLSX.readFile('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        var timeChecker = fs.statSync('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
        var timeCheckerUpdate = timeChecker.mtime.toString();

        const optionsTimerChecker = {day: "numeric", month: "long", hour: "numeric", minute: "numeric"};
        const dateTimeChecker = new Date(timeCheckerUpdate);
        const timeCheckerUpdater = new Intl.DateTimeFormat("en-GB", optionsTimerChecker).format(dateTimeChecker);

        var stats = fs.statSync('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');

        if (stats.mtime.toString() != statTester) {
			
		client.channels.cache.get('730062159672901664').startTyping();
		client.channels.cache.get('730062187439325285').startTyping();
		client.channels.cache.get('730062241197719633').startTyping();
		client.channels.cache.get('730062622761811968').startTyping();
		client.channels.cache.get('729434173621928158').startTyping();
		client.channels.cache.get('727241046118891565').startTyping();
		client.channels.cache.get('734082871802986507').startTyping();
		client.user.setActivity("Updating Market Place" , {type: 'STREAMING', url: 'https://www.twitch.tv/blackdesertonlineofficial'} );

            var statsPost = fs.statSync('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
            var updatedTime = statsPost.mtime.toString();

            const optionsAuto = {day: "numeric", month: "long", hour: "numeric", minute: "numeric"};
            const dateAuto = new Date(updatedTime);
            const timeOfUpdateAuto = new Intl.DateTimeFormat("en-GB", optionsAuto).format(dateAuto);

            for (var i = 0; i < xlData.length; i++) {
                if (xlData[i].name.includes("Memory Fragment")) {
                    var memPriceChangeNew = xlData[i].price;
                    var memPriceChangeId = xlData[i].id;
                    newPriceMem = memPriceChangeNew;

                    if (newPriceMem != oldPriceMem) {
                        if (newPriceMem > oldPriceMem) {
                            var changeMem = newPriceMem - oldPriceMem;
                        } else if (newPriceMem < oldPriceMem) {
                            var changeMem = oldPriceMem - newPriceMem;
                        }
                        console.log("New Price " + newPriceMem.toLocaleString());
                        const memPriceChange = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle("Memory Fragment price has changed!" + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + memPriceChangeId + '.png')
                            .addField('Change', changeMem.toLocaleString(), true)
                            .addField('Old Price', oldPriceMem.toLocaleString(), true)
                            .addField('New Price', newPriceMem.toLocaleString(), true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('732272973691486289').send(memPriceChange);
                        }, 2000);

                        oldPriceMem = newPriceMem;
                        console.log("New Old Price for Memory Fragment " + oldPriceMem.toLocaleString());

                    } else {
                        console.log("No price change!" + "\n");
                    }
                }
				if (xlData[i].name.includes("Ancient Relic Crystal Shard")) {
                    var relicPriceChangeNew = xlData[i].price;
                    var relicPriceChangeId = xlData[i].id;
                    newPriceRelic = relicPriceChangeNew;

                    if (newPriceRelic != oldPriceRelic) {
                        if (newPriceRelic > oldPriceRelic) {
                            var changeRelic = newPriceRelic - oldPriceRelic;
                        } else if (newPriceRelic < oldPriceRelic) {
                            var changeRelic = oldPriceRelic - newPriceRelic;
                        }
                        console.log("New Price " + newPriceRelic.toLocaleString());
                        const relicPriceChange = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle("Ancient Relic Crystal Shard price has changed!" + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + relicPriceChangeId + '.png')
                            .addField('Change', changeRelic.toLocaleString(), true)
                            .addField('Old Price', oldPriceRelic.toLocaleString(), true)
                            .addField('New Price', newPriceRelic.toLocaleString(), true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('732272973691486289').send(relicPriceChange);
                        }, 2000);

                        oldPriceRelic = newPriceRelic;
                        console.log("New Old Price for Ancient Relic Crystal Shard " + oldPriceRelic.toLocaleString());

                    } else {
                        console.log("No price change!" + "\n");
                    }
                }
				if (xlData[i].enhancement == 4) {
					if (xlData[i].name.includes("Ring of Crescent Guardian")) {
						var cresPriceChangeNew = xlData[i].price;
						var cresPriceChangeId = xlData[i].id;
						newPriceCres = cresPriceChangeNew;

						if (newPriceCres != oldPriceCres) {
							if (newPriceCres > oldPriceCres) {
								var changeCres = newPriceCres - oldPriceCres;
							} else if (newPriceCres < oldPriceCres) {
								var changeCres = oldPriceCres - newPriceCres;
							}
							console.log("New Price " + newPriceCres.toLocaleString());
							const cresPriceChange = new Discord.MessageEmbed()
								.setColor('#089e65')
								.setTitle("Ring of Crescent Guardian price has changed!" + "\n" + timeOfUpdateAuto + " (UK)")
								.setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + cresPriceChangeId + '.png')
								.addField('Change', changeCres.toLocaleString(), true)
								.addField('Old Price', oldPriceCres.toLocaleString(), true)
								.addField('New Price', newPriceCres.toLocaleString(), true)
								.setTimestamp()
								.setFooter(client.user.username, client.user.avatarURL());
								setTimeout(() => {
								client.channels.cache.get('732272973691486289').send(cresPriceChange);
							}, 2000);

							oldPriceCres = newPriceCres;
							console.log("New Old Price for Ring of Crescent Guardian " + oldPriceCres.toLocaleString());

						} else {
							console.log("No price change!" + "\n");
						}
					}
					if (xlData[i].name.includes("Black Distortion Earring")) {
						var distoPriceChangeNew = xlData[i].price;
						var distoPriceChangeId = xlData[i].id;
						newPriceDisto = distoPriceChangeNew;

						if (newPriceDisto != oldPriceDisto) {
							if (newPriceDisto > oldPriceDisto) {
								var changeDisto = newPriceDisto - oldPriceDisto;
							} else if (newPriceDisto < oldPriceDisto) {
								var changeDisto = oldPriceDisto - newPriceDisto;
							}
							console.log("New Price " + newPriceDisto.toLocaleString());
							const distoPriceChange = new Discord.MessageEmbed()
								.setColor('#089e65')
								.setTitle("Black Distortion Earring price has changed!" + "\n" + timeOfUpdateAuto + " (UK)")
								.setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + distoPriceChangeId + '.png')
								.addField('Change', changeDisto.toLocaleString(), true)
								.addField('Old Price', oldPriceDisto.toLocaleString(), true)
								.addField('New Price', newPriceDisto.toLocaleString(), true)
								.setTimestamp()
								.setFooter(client.user.username, client.user.avatarURL());
								setTimeout(() => {
								client.channels.cache.get('732272973691486289').send(distoPriceChange);
							}, 2000);

							oldPriceDisto = newPriceDisto;
							console.log("New Old Price for Black Distortion Earring " + oldPriceDisto.toLocaleString());

						} else {
							console.log("No price change!" + "\n");
						}
					}
				}
            }

            console.log("Updating Market Place!");
            console.log("Time in memory: " + statTester);
            console.log("New file time: " + stats.mtime.toString());
            statTester = stats.mtime.toString();

            var csvItemDate = timeOfUpdateAuto;
            var csvItemName = "Item Name";
            var csvItemAmount = "Listed Amount";
            var csvItemBasePrice = "Base Price";
            var csvItemMaxPrice = "Max Price";
            var csvItemMinPrice = "Min Price";
            var csvItemTotalSold = "Total Sold";
            var csvItemEnhancement = "Enhancement Level";
            var csvBlank = " ";

            var csvStartRow = [['\n'], [csvItemDate], [csvItemName], [csvItemAmount], [csvItemBasePrice], [csvItemMaxPrice], [csvItemMinPrice], [csvItemTotalSold], [csvItemEnhancement]];

            setTimeout(() => {
                fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', csvStartRow, (err) => {
                    if (err) throw err;
                });
                console.log("Date and item information has been added!");
            }, 500);

            // accessories 730062159672901664
            // scrolls BS 730062187439325285
            // boss armors 730062241197719633
            // weapons 730062622761811968

            for (var i = 0; i < xlData.length; i++) {
                if (xlData[i].enhancement == 0) {
                    if (xlData[i].name.includes("Vell's Heart")) {
                        var vellHeartName = xlData[i].name;//
                        var vellHeartPriceMax = xlData[i].maximum;
                        var vellHeartPriceMin = xlData[i].minimum;
                        var vellHeartAmount = xlData[i].count;
                        var vellHeartBasePrice = xlData[i].price;
                        var vellHeartEnhancement = xlData[i].enhancement;
                        var vellHeartSold = xlData[i].totalTradeCount;
                        var vellHeartId = xlData[i].id;

                        const vellHeart = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(vellHeartName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + vellHeartId + '.png')
                            .addField('Total Listed', vellHeartAmount.toLocaleString(), true)
                            .addField('Total Sold', vellHeartSold.toLocaleString(), true)
                            .addField('Base Price', vellHeartBasePrice.toLocaleString(), true)
                            .addField('Max Price', vellHeartPriceMax.toLocaleString(), true)
                            .addField('Min Price', vellHeartPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(vellHeart);
                        }, 2000);

                        var vellHeartArray = [['\n'], [csvBlank], [csvBlank], [vellHeartName], [vellHeartAmount], [vellHeartBasePrice], [vellHeartPriceMax], [vellHeartPriceMin], [vellHeartSold], [vellHeartEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', vellHeartArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Vell's Heart Added");
                        }, 1000);

                    }
                    if (xlData[i].name.includes("Vell's Concentrated Magic")) {
                        var vellConcentratedName = xlData[i].name;//
                        var vellConcentratedPriceMax = xlData[i].maximum;
                        var vellConcentratedPriceMin = xlData[i].minimum;
                        var vellConcentratedAmount = xlData[i].count;
                        var vellConcentratedBasePrice = xlData[i].price;
                        var vellConcentratedEnhancement = xlData[i].enhancement;
                        var vellConcentratedSold = xlData[i].totalTradeCount;
                        var vellConcentratedId = xlData[i].id;

                        const vellConcentrated = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(vellConcentratedName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + vellConcentratedId + '.png')
                            .addField('Total Listed', vellConcentratedAmount.toLocaleString(), true)
                            .addField('Total Sold', vellConcentratedSold.toLocaleString(), true)
                            .addField('Base Price', vellConcentratedBasePrice.toLocaleString(), true)
                            .addField('Max Price', vellConcentratedPriceMax.toLocaleString(), true)
                            .addField('Min Price', vellConcentratedPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(vellConcentrated);
                        }, 2000);

                        var vellConcentratedArray = [['\n'], [csvBlank], [csvBlank], [vellConcentratedName], [vellConcentratedAmount], [vellConcentratedBasePrice], [vellConcentratedPriceMax], [vellConcentratedPriceMin], [vellConcentratedSold], [vellConcentratedEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', vellConcentratedArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Vell's Concentrated Magic Added");
                        }, 2000);

                    }
                    if (xlData[i].name.includes("Memory Fragment")) {
                        var memoryName = xlData[i].name;//
                        var memoryPriceMax = xlData[i].maximum;
                        var memoryPriceMin = xlData[i].minimum;
                        var memoryAmount = xlData[i].count;
                        var memoryBasePrice = xlData[i].price;
                        var memoryEnhancement = xlData[i].enhancement;
                        var memorySold = xlData[i].totalTradeCount;
                        var memoryId = xlData[i].id;

                        const memoryFragment = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(memoryName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + memoryId + '.png')
                            .addField('Total Listed', memoryAmount.toLocaleString(), true)
                            .addField('Total Sold', memorySold.toLocaleString(), true)
                            .addField('Base Price', memoryBasePrice.toLocaleString(), true)
                            .addField('Max Price', memoryPriceMax.toLocaleString(), true)
                            .addField('Min Price', memoryPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(memoryFragment);
                        }, 2000);

                        var memoryFragmentArray = [['\n'], [csvBlank], [csvBlank], [memoryName], [memoryAmount], [memoryBasePrice], [memoryPriceMax], [memoryPriceMin], [memorySold], [memoryEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', memoryFragmentArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Memory Fragment Added");
                        }, 3000);

                    }
                    if (xlData[i].name.includes("Manshaum Voodoo Doll")) {
                        var manshaumVoodooName = xlData[i].name;//
                        var manshaumVoodooMax = xlData[i].maximum;
                        var manshaumVoodooMin = xlData[i].minimum;
                        var manshaumVoodooAmount = xlData[i].count;
                        var manshaumVoodooBasePrice = xlData[i].price;
                        var manshaumVoodooEnhancement = xlData[i].enhancement;
                        var manshaumSold = xlData[i].totalTradeCount;
                        var manshaumVoodooId = xlData[i].id;

                        const manshaumVoodoo = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(manshaumVoodooName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + manshaumVoodooId + '.png')
                            .addField('Total Listed', manshaumVoodooAmount.toLocaleString(), true)
                            .addField('Total Sold', manshaumSold.toLocaleString(), true)
                            .addField('Base Price', manshaumVoodooBasePrice.toLocaleString(), true)
                            .addField('Max Price', manshaumVoodooMax.toLocaleString(), true)
                            .addField('Min Price', manshaumVoodooMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(manshaumVoodoo);
                        }, 2000);

                        var manshaumVoodooArray = [['\n'], [csvBlank], [csvBlank], [manshaumVoodooName], [manshaumVoodooAmount], [manshaumVoodooBasePrice], [manshaumVoodooMax], [manshaumVoodooMin], [manshaumSold], [manshaumVoodooEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', manshaumVoodooArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Manshaum Voodoo Doll Added");
                        }, 4000);

                    }
                    if (xlData[i].name.includes("Ancient Relic Crystal Shard")) {
                        var relicShardName = xlData[i].name;//
                        var relicShardPriceMax = xlData[i].maximum;
                        var relicShardPriceMin = xlData[i].minimum;
                        var relicShardAmount = xlData[i].count;
                        var relicShardBasePrice = xlData[i].price;
                        var relicShardEnhancement = xlData[i].enhancement;
                        var relicShardSold = xlData[i].totalTradeCount;
                        var relicShardId = xlData[i].id;

                        const relicShard = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(relicShardName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + relicShardId + '.png')
                            .addField('Total Listed', relicShardAmount.toLocaleString(), true)
                            .addField('Total Sold', relicShardSold.toLocaleString(), true)
                            .addField('Base Price', relicShardBasePrice.toLocaleString(), true)
                            .addField('Max Price', relicShardPriceMax.toLocaleString(), true)
                            .addField('Min Price', relicShardPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(relicShard);
                        }, 2000);

                        var relicShardArray = [['\n'], [csvBlank], [csvBlank], [relicShardName], [relicShardAmount], [relicShardBasePrice], [relicShardPriceMax], [relicShardPriceMin], [relicShardSold], [relicShardEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', relicShardArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Relic Shard Added");
                        }, 5000);

                    }
                    if (xlData[i].name.includes("Caphras Stone")) {
                        var caphraStoneName = xlData[i].name;//
                        var caphraStonePriceMax = xlData[i].maximum;
                        var caphraStonePriceMin = xlData[i].minimum;
                        var caphraStoneAmount = xlData[i].count;
                        var caphraStoneBasePrice = xlData[i].price;
                        var caphrasStoneEnhancement = xlData[i].enhancement;
                        var caphrasStoneSold = xlData[i].totalTradeCount;
                        var caphraStoneId = xlData[i].id;

                        const caphraStone = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(caphraStoneName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + caphraStoneId + '.png')
                            .addField('Total Listed', caphraStoneAmount.toLocaleString(), true)
                            .addField('Total Sold', caphrasStoneSold.toLocaleString(), true)
                            .addField('Base Price', caphraStoneBasePrice.toLocaleString(), true)
                            .addField('Max Price', caphraStonePriceMax.toLocaleString(), true)
                            .addField('Min Price', caphraStonePriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(caphraStone);
                        }, 2000);

                        var caphraStoneArray = [['\n'], [csvBlank], [csvBlank], [caphraStoneName], [caphraStoneAmount], [caphraStoneBasePrice], [caphraStonePriceMax], [caphraStonePriceMin], [caphrasStoneSold], [caphrasStoneEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', caphraStoneArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Caphras Stone Added");
                        }, 6000);

                    }
                    if (xlData[i].name.includes("Scroll Written in Ancient Language")) {
                        var scrollAncientName = xlData[i].name;
                        var scrollAncientPriceMax = xlData[i].maximum;
                        var scrollAncientPriceMin = xlData[i].minimum;
                        var scrollAncientAmount = xlData[i].count;
                        var scrollAncientBasePrice = xlData[i].price;
                        var scrollAncientEnhancement = xlData[i].enhancement;
                        var scrollAncientSold = xlData[i].totalTradeCount;
                        var scrollAncientId = xlData[i].id;

                        const scrollAncient = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(scrollAncientName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + scrollAncientId + '.png')
                            .addField('Total Listed', scrollAncientAmount.toLocaleString(), true)
                            .addField('Total Sold', scrollAncientSold.toLocaleString(), true)
                            .addField('Base Price', scrollAncientBasePrice.toLocaleString(), true)
                            .addField('Max Price', scrollAncientPriceMax.toLocaleString(), true)
                            .addField('Min Price', scrollAncientPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(scrollAncient);
                        }, 2000);

                        var scrollAncientArray = [['\n'], [csvBlank], [csvBlank], [scrollAncientName], [scrollAncientAmount], [scrollAncientBasePrice], [scrollAncientPriceMax], [scrollAncientPriceMin], [scrollAncientSold], [scrollAncientEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', scrollAncientArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Scroll Written in Ancient Language Added");
                        }, 7000);

                    }
                    if (xlData[i].id == '16002') {
                        var blackStoneAName = xlData[i].name;
                        var blackStoneAPriceMax = xlData[i].maximum;
                        var blackStoneAPriceMin = xlData[i].minimum;
                        var blackStoneAAmount = xlData[i].count;
                        var blackStoneABasePrice = xlData[i].price;
                        var blackStoneAEnhancement = xlData[i].enhancement;
                        var blackStoneASold = xlData[i].totalTradeCount;
                        var blackStoneAId = xlData[i].id;

                        const blackStoneA = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(blackStoneAName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + blackStoneAId + '.png')
                            .addField('Total Listed', blackStoneAAmount.toLocaleString(), true)
                            .addField('Total Sold', blackStoneASold.toLocaleString(), true)
                            .addField('Base Price', blackStoneABasePrice.toLocaleString(), true)
                            .addField('Max Price', blackStoneAPriceMax.toLocaleString(), true)
                            .addField('Min Price', blackStoneAPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(blackStoneA);
                        }, 2000);

                        var blackStoneAArray = [['\n'], [csvBlank], [csvBlank], [blackStoneAName], [blackStoneAAmount], [blackStoneABasePrice], [blackStoneAPriceMax], [blackStoneAPriceMin], [blackStoneASold], [blackStoneAEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', blackStoneAArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Black Stone (Armor) Added");
                        }, 8000);

                    }
                    if (xlData[i].id == '16005') {
                        var cBlackStoneAName = xlData[i].name;
                        var cBlackStoneAPriceMax = xlData[i].maximum;
                        var cBlackStoneAPriceMin = xlData[i].minimum;
                        var cBlackStoneAAmount = xlData[i].count;
                        var cBlackStoneABasePrice = xlData[i].price;
                        var cBlackStoneAEnhancement = xlData[i].enhancement;
                        var cBlackStoneASold = xlData[i].totalTradeCount;
                        var cBlackStoneAId = xlData[i].id;

                        const cBlackStoneA = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(cBlackStoneAName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + cBlackStoneAId + '.png')
                            .addField('Total Listed', cBlackStoneAAmount.toLocaleString(), true)
                            .addField('Total Sold', cBlackStoneASold.toLocaleString(), true)
                            .addField('Base Price', cBlackStoneABasePrice.toLocaleString(), true)
                            .addField('Max Price', cBlackStoneAPriceMax.toLocaleString(), true)
                            .addField('Min Price', cBlackStoneAPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(cBlackStoneA);
                        }, 2000);

                        var cBlackStoneAArray = [['\n'], [csvBlank], [csvBlank], [cBlackStoneAName], [cBlackStoneAAmount], [cBlackStoneABasePrice], [cBlackStoneAPriceMax], [cBlackStoneAPriceMin], [cBlackStoneASold], [cBlackStoneAEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', cBlackStoneAArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Concentrated Magical Black Stone (Armor) Added");
                        }, 9000);

                    }
                    if (xlData[i].id == '16001') {
                        var blackStoneWName = xlData[i].name;//
                        var blackStoneWPriceMax = xlData[i].maximum;
                        var blackStoneWPriceMin = xlData[i].minimum;
                        var blackStoneWAmount = xlData[i].count;
                        var blackStoneWBasePrice = xlData[i].price;
                        var blackStoneWEnhancement = xlData[i].enhancement;
                        var blackStoneWSold = xlData[i].totalTradeCount;
                        var blackStoneWId = xlData[i].id;

                        const blackStoneW = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(blackStoneWName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + blackStoneWId + '.png')
                            .addField('Total Listed', blackStoneWAmount.toLocaleString(), true)
                            .addField('Total Sold', blackStoneWSold.toLocaleString(), true)
                            .addField('Base Price', blackStoneWBasePrice.toLocaleString(), true)
                            .addField('Max Price', blackStoneWPriceMax.toLocaleString(), true)
                            .addField('Min Price', blackStoneWPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(blackStoneW);
                        }, 2000);

                        var blackStoneWArray = [['\n'], [csvBlank], [csvBlank], [blackStoneWName], [blackStoneWAmount], [blackStoneWBasePrice], [blackStoneWPriceMax], [blackStoneWPriceMin], [blackStoneWSold], [blackStoneWEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', blackStoneWArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Black Stone (Weapon) Added");
                        }, 10000);

                    }
                    if (xlData[i].id == '16004') {
                        var cBlackStoneWName = xlData[i].name;//
                        var cBlackStoneWPriceMax = xlData[i].maximum;
                        var cBlackStoneWPriceMin = xlData[i].minimum;
                        var cBlackStoneWAmount = xlData[i].count;
                        var cBlackStoneWBasePrice = xlData[i].price;
                        var cBlackStoneWEnhancement = xlData[i].enhancement;
                        var cBlackStoneWSold = xlData[i].totalTradeCount;
                        var cBlackStoneWId = xlData[i].id;

                        const cBlackStoneW = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(cBlackStoneWName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + cBlackStoneWId + '.png')
                            .addField('Total Listed', cBlackStoneWAmount.toLocaleString(), true)
                            .addField('Total Sold', cBlackStoneWSold.toLocaleString(), true)
                            .addField('Base Price', cBlackStoneWBasePrice.toLocaleString(), true)
                            .addField('Max Price', cBlackStoneWPriceMax.toLocaleString(), true)
                            .addField('Min Price', cBlackStoneWPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062187439325285').send(cBlackStoneW);
                        }, 2000);

                        var cBlackStoneWArray = [['\n'], [csvBlank], [csvBlank], [cBlackStoneWName], [cBlackStoneWAmount], [cBlackStoneWBasePrice], [cBlackStoneWPriceMax], [cBlackStoneWPriceMin], [cBlackStoneWSold], [cBlackStoneWEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', cBlackStoneWArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Concentrated Magical Black Stone (Weapon) Added");
                        }, 11000);

                    }
                    if (xlData[i].name.includes("Garmoth's Heart")) {
                        var garmothHeartName = xlData[i].name;//
                        var garmothHeartPriceMax = xlData[i].maximum;
                        var garmothHeartPriceMin = xlData[i].minimum;
                        var garmothHeartAmount = xlData[i].count;
                        var garmothHeartBasePrice = xlData[i].price;
                        var garmothHeartEnhancement = xlData[i].enhancement;
                        var garmothHeartSold = xlData[i].totalTradeCount;
                        var garmothHeartId = xlData[i].id;

                        const garmothHeart = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(garmothHeartName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + garmothHeartId + '.png')
                            .addField('Total Listed', garmothHeartAmount.toLocaleString(), true)
                            .addField('Total Sold', garmothHeartSold.toLocaleString(), true)
                            .addField('Base Price', garmothHeartBasePrice.toLocaleString(), true)
                            .addField('Max Price', garmothHeartPriceMax.toLocaleString(), true)
                            .addField('Min Price', garmothHeartPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062622761811968').send(garmothHeart);
                        }, 2000);

                        var garmothHeartArray = [['\n'], [csvBlank], [csvBlank], [garmothHeartName], [garmothHeartAmount], [garmothHeartBasePrice], [garmothHeartPriceMax], [garmothHeartPriceMin], [garmothHeartSold], [garmothHeartEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', garmothHeartArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Garmoth's Heart Added");
                        }, 12000);

                    }
                    if (xlData[i].name.includes("Inverted Heart of Garmoth")) {
                        var garmothIHeartName = xlData[i].name;//
                        var garmothIHeartPriceMax = xlData[i].maximum;
                        var garmothIHeartPriceMin = xlData[i].minimum;
                        var garmothIHeartAmount = xlData[i].count;
                        var garmothIHeartBasePrice = xlData[i].price;
                        var garmothIHeartEnhancement = xlData[i].enhancement;
                        var garmothIHeartSold = xlData[i].totalTradeCount;
                        var garmothIHeartId = xlData[i].id;

                        const garmothIHeart = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(garmothIHeartName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + garmothIHeartId + '.png')
                            .addField('Total Listed', garmothIHeartAmount.toLocaleString(), true)
                            .addField('Total Sold', garmothIHeartSold.toLocaleString(), true)
                            .addField('Base Price', garmothIHeartBasePrice.toLocaleString(), true)
                            .addField('Max Price', garmothIHeartPriceMax.toLocaleString(), true)
                            .addField('Min Price', garmothIHeartPriceMin.toLocaleString(), true)
                            .addField('\u200B', '\u200B', true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062622761811968').send(garmothIHeart);
                        }, 2000);

                        var garmothIHeartArray = [['\n'], [csvBlank], [csvBlank], [garmothIHeartName], [garmothIHeartAmount], [garmothIHeartBasePrice], [garmothIHeartPriceMax], [garmothIHeartPriceMin], [garmothIHeartSold], [garmothIHeartEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', garmothIHeartArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Inverted Heart of Garmoth Added");
                        }, 13000);

                    }
                }
                if (xlData[i].enhancement == 4) {
                    if (xlData[i].name.includes("Ogre Ring")) {
                        var ogreRingName = xlData[i].name;//
                        var ogreRingPriceMax = xlData[i].maximum;
                        var ogreRingPriceMin = xlData[i].minimum;
                        var ogreRingAmount = xlData[i].count;
                        var ogreRingBasePrice = xlData[i].price;
                        var ogreRingEnhancement = xlData[i].enhancement;
                        var ogreRingSold = xlData[i].totalTradeCount;
                        var ogreRingId = xlData[i].id;

                        const ogreRing = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(ogreRingName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + ogreRingId + '.png')
                            .addField('Total Listed', ogreRingAmount.toLocaleString(), true)
                            .addField('Total Sold', ogreRingSold.toLocaleString(), true)
                            .addField('Base Price', ogreRingBasePrice.toLocaleString(), true)
                            .addField('Max Price', ogreRingPriceMax.toLocaleString(), true)
                            .addField('Min Price', ogreRingPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', ogreRingEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(ogreRing);
                        }, 2000);

                        var ogreRingArray = [['\n'], [csvBlank], [csvBlank], [ogreRingName], [ogreRingAmount], [ogreRingBasePrice], [ogreRingPriceMax], [ogreRingPriceMin], [ogreRingSold], [ogreRingEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', ogreRingArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Ogre Ring Added");
                        }, 14000);

                    }
                    if (xlData[i].name.includes("Laytenn's Power Stone")) {
                        var laytennStoneName = xlData[i].name;//
                        var laytennStonePriceMax = xlData[i].maximum;
                        var laytennStonePriceMin = xlData[i].minimum;
                        var laytennStoneAmount = xlData[i].count;
                        var laytennStoneBasePrice = xlData[i].price;
                        var laytennStoneEnhancement = xlData[i].enhancement;
                        var laytennStoneSold = xlData[i].totalTradeCount;
                        var laytennStoneId = xlData[i].id;

                        const laytennStone = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(laytennStoneName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + laytennStoneId + '.png')
                            .addField('Total Listed', laytennStoneAmount.toLocaleString(), true)
                            .addField('Total Sold', laytennStoneSold.toLocaleString(), true)
                            .addField('Base Price', laytennStoneBasePrice.toLocaleString(), true)
                            .addField('Max Price', laytennStonePriceMax.toLocaleString(), true)
                            .addField('Min Price', laytennStonePriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', laytennStoneEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(laytennStone);
                        }, 2000);

                        var laytennStoneArray = [['\n'], [csvBlank], [csvBlank], [laytennStoneName], [laytennStoneAmount], [laytennStoneBasePrice], [laytennStonePriceMax], [laytennStonePriceMin], [laytennStoneSold], [laytennStoneEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', laytennStoneArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Laytenn's Power Stone Added");
                        }, 15000);

                    }
                    if (xlData[i].name.includes("Tungrad Necklace")) {
                        var tungradNecklaceName = xlData[i].name;//
                        var tungradNecklacePriceMax = xlData[i].maximum;
                        var tungradNecklacePriceMin = xlData[i].minimum;
                        var tungradNecklaceAmount = xlData[i].count;
                        var tungradNecklaceBasePrice = xlData[i].price;
                        var tungradNecklaceEnhancement = xlData[i].enhancement;
                        var tungradNeckSold = xlData[i].totalTradeCount;
                        var tungradNecklaceId = xlData[i].id;

                        const tungradNecklace = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(tungradNecklaceName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + tungradNecklaceId + '.png')
                            .addField('Total Listed', tungradNecklaceAmount.toLocaleString(), true)
                            .addField('Total Sold', tungradNeckSold.toLocaleString(), true)
                            .addField('Base Price', tungradNecklaceBasePrice.toLocaleString(), true)
                            .addField('Max Price', tungradNecklacePriceMax.toLocaleString(), true)
                            .addField('Min Price', tungradNecklacePriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', tungradNecklaceEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(tungradNecklace);
                        }, 2000);

                        var tungradNecklaceArray = [['\n'], [csvBlank], [csvBlank], [tungradNecklaceName], [tungradNecklaceAmount], [tungradNecklaceBasePrice], [tungradNecklacePriceMax], [tungradNecklacePriceMin], [tungradNeckSold], [tungradNecklaceEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', tungradNecklaceArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Tungrad Necklace Added");
                        }, 16000);

                    }
                    if (xlData[i].name.includes("Tungrad Ring")) {
                        var tungradRingName = xlData[i].name;//
                        var tungradRingPriceMax = xlData[i].maximum;
                        var tungradRingPriceMin = xlData[i].minimum;
                        var tungradRingAmount = xlData[i].count;
                        var tungradRingBasePrice = xlData[i].price;
                        var tungradRingEnhancement = xlData[i].enhancement;
                        var tungradRingSold = xlData[i].totalTradeCount;
                        var tungradRingId = xlData[i].id;

                        const tungradRing = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(tungradRingName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + tungradRingId + '.png')
                            .addField('Total Listed', tungradRingAmount.toLocaleString(), true)
                            .addField('Total Sold', tungradRingSold.toLocaleString(), true)
                            .addField('Base Price', tungradRingBasePrice.toLocaleString(), true)
                            .addField('Max Price', tungradRingPriceMax.toLocaleString(), true)
                            .addField('Min Price', tungradRingPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', tungradRingEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(tungradRing);
                        }, 2000);

                        var tungradRingArray = [['\n'], [csvBlank], [csvBlank], [tungradRingName], [tungradRingAmount], [tungradRingBasePrice], [tungradRingPriceMax], [tungradRingPriceMin], [tungradRingSold], [tungradRingEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', tungradRingArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Tungrad Ring Added");
                        }, 17000);

                    }
                    if (xlData[i].name.includes("Tungrad Belt")) {
                        var tungradBeltName = xlData[i].name;//
                        var tungradBeltPriceMax = xlData[i].maximum;
                        var tungradBeltPriceMin = xlData[i].minimum;
                        var tungradBeltAmount = xlData[i].count;
                        var tungradBeltBasePrice = xlData[i].price;
                        var tungradBeltEnhancement = xlData[i].enhancement;
                        var tungradBeltSold = xlData[i].totalTradeCount;
                        var tungradBeltId = xlData[i].id;

                        const tungradBelt = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(tungradBeltName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + tungradBeltId + '.png')
                            .addField('Total Listed', tungradBeltAmount.toLocaleString(), true)
                            .addField('Total Sold', tungradBeltSold.toLocaleString(), true)
                            .addField('Base Price', tungradBeltBasePrice.toLocaleString(), true)
                            .addField('Max Price', tungradBeltPriceMax.toLocaleString(), true)
                            .addField('Min Price', tungradBeltPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', tungradBeltEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(tungradBelt);
                        }, 2000);

                        var tungradBeltArray = [['\n'], [csvBlank], [csvBlank], [tungradBeltName], [tungradBeltAmount], [tungradBeltBasePrice], [tungradBeltPriceMax], [tungradBeltPriceMin], [tungradBeltSold], [tungradBeltEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', tungradBeltArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Tungrad Belt Added");
                        }, 18000);

                    }
                    if (xlData[i].name.includes("Basilisk's Belt")) {
                        var basiliskBeltName = xlData[i].name;//
                        var basiliskBeltPriceMax = xlData[i].maximum;
                        var basiliskBeltPriceMin = xlData[i].minimum;
                        var basiliskBeltAmount = xlData[i].count;
                        var basiliskBeltBasePrice = xlData[i].price;
                        var basiliskBeltEnhancement = xlData[i].enhancement;
                        var basiliskBeltSold = xlData[i].totalTradeCount;
                        var basiliskBeltId = xlData[i].id;

                        const basiliskBelt = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(basiliskBeltName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + basiliskBeltId + '.png')
                            .addField('Total Listed', basiliskBeltAmount.toLocaleString(), true)
                            .addField('Total Sold', basiliskBeltSold.toLocaleString(), true)
                            .addField('Base Price', basiliskBeltBasePrice.toLocaleString(), true)
                            .addField('Max Price', basiliskBeltPriceMax.toLocaleString(), true)
                            .addField('Min Price', basiliskBeltPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', basiliskBeltEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(basiliskBelt);
                        }, 2000);

                        var basiliskBeltArray = [['\n'], [csvBlank], [csvBlank], [basiliskBeltName], [basiliskBeltAmount], [basiliskBeltBasePrice], [basiliskBeltPriceMax], [basiliskBeltPriceMin], [basiliskBeltSold], [basiliskBeltEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', basiliskBeltArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Basilisk's Belt Added");
                        }, 19000);

                    }
                    if (xlData[i].name.includes("Ring of Crescent Guardian")) {
                        var crescentRingName = xlData[i].name;//
                        var crescentRingPriceMax = xlData[i].maximum;
                        var crescentRingPriceMin = xlData[i].minimum;
                        var crescentRingAmount = xlData[i].count;
                        var crescentRingBasePrice = xlData[i].price;
                        var crescentRingEnhancement = xlData[i].enhancement;
                        var crescentRingSold = xlData[i].totalTradeCount;
                        var crescentRingId = xlData[i].id;

                        const crescentRing = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(crescentRingName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + crescentRingId + '.png')
                            .addField('Total Listed', crescentRingAmount.toLocaleString(), true)
                            .addField('Total Sold', crescentRingSold.toLocaleString(), true)
                            .addField('Base Price', crescentRingBasePrice.toLocaleString(), true)
                            .addField('Max Price', crescentRingPriceMax.toLocaleString(), true)
                            .addField('Min Price', crescentRingPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', crescentRingEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(crescentRing);
                        }, 2000);

                        var crescentRingArray = [['\n'], [csvBlank], [csvBlank], [crescentRingName], [crescentRingAmount], [crescentRingBasePrice], [crescentRingPriceMax], [crescentRingPriceMin], [crescentRingSold], [crescentRingEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', crescentRingArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Ring of Crescent Guardian Added");
                        }, 20000);

                    }
                    if (xlData[i].name.includes("Black Distortion Earring")) {
                        var blackDistortionName = xlData[i].name;//
                        var blackDistortionPriceMax = xlData[i].maximum;
                        var blackDistortionPriceMin = xlData[i].minimum;
                        var blackDistortionAmount = xlData[i].count;
                        var blackDistortionBasePrice = xlData[i].price;
                        var blackDistortionEnhancement = xlData[i].enhancement;
                        var blackDistortionSold = xlData[i].totalTradeCount;
                        var blackDistortionId = xlData[i].id;

                        const blackDistortion = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(blackDistortionName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + blackDistortionId + '.png')
                            .addField('Total Listed', blackDistortionAmount.toLocaleString(), true)
                            .addField('Total Sold', blackDistortionSold.toLocaleString(), true)
                            .addField('Base Price', blackDistortionBasePrice.toLocaleString(), true)
                            .addField('Max Price', blackDistortionPriceMax.toLocaleString(), true)
                            .addField('Min Price', blackDistortionPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', blackDistortionEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062159672901664').send(blackDistortion);
                        }, 2000);

                        var blackDistortionArray = [['\n'], [csvBlank], [csvBlank], [blackDistortionName], [blackDistortionAmount], [blackDistortionBasePrice], [blackDistortionPriceMax], [blackDistortionPriceMin], [blackDistortionSold], [blackDistortionEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', blackDistortionArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Black Distortion Earring Added");
                        }, 21000);
                    }
                }
                if (xlData[i].enhancement == 20) {
                    if (xlData[i].name.includes("Dim Tree Spirit's Armor")) {
                        var dimTreeName = xlData[i].name;//
                        var dimTreePriceMax = xlData[i].maximum;
                        var dimTreePriceMin = xlData[i].minimum;
                        var dimTreeAmount = xlData[i].count;
                        var dimTreeBasePrice = xlData[i].price;
                        var dimTreeEnhancement = xlData[i].enhancement;
                        var dimTreeSold = xlData[i].totalTradeCount;
                        var dimTreeId = xlData[i].id;

                        const dimTree = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(dimTreeName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + dimTreeId + '.png')
                            .addField('Total Listed', dimTreeAmount.toLocaleString(), true)
                            .addField('Total Sold', dimTreeSold.toLocaleString(), true)
                            .addField('Base Price', dimTreeBasePrice.toLocaleString(), true)
                            .addField('Max Price', dimTreePriceMax.toLocaleString(), true)
                            .addField('Min Price', dimTreePriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', dimTreeEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062241197719633').send(dimTree);
                        }, 2000);

                        var dimTreeArray = [['\n'], [csvBlank], [csvBlank], [dimTreeName], [dimTreeAmount], [dimTreeBasePrice], [dimTreePriceMax], [dimTreePriceMin], [dimTreeSold], [dimTreeEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', dimTreeArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Dim Tree Spirit's Armor Added");
                        }, 22000);

                    }
                    if (xlData[i].name.includes("Red Nose's Armor")) {
                        var redNoseName = xlData[i].name;//
                        var redNosePriceMax = xlData[i].maximum;
                        var redNosePriceMin = xlData[i].minimum;
                        var redNoseAmount = xlData[i].count;
                        var redNoseBasePrice = xlData[i].price;
                        var redNoseEnhancement = xlData[i].enhancement;
                        var redNoseSold = xlData[i].totalTradeCount;
                        var redNoseId = xlData[i].id;

                        const redNose = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(redNoseName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + redNoseId + '.png')
                            .addField('Total Listed', redNoseAmount.toLocaleString(), true)
                            .addField('Total Sold', redNoseSold.toLocaleString(), true)
                            .addField('Base Price', redNoseBasePrice.toLocaleString(), true)
                            .addField('Max Price', redNosePriceMax.toLocaleString(), true)
                            .addField('Min Price', redNosePriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', redNoseEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062241197719633').send(redNose);
                        }, 2000);

                        var redNoseArray = [['\n'], [csvBlank], [csvBlank], [redNoseName], [redNoseAmount], [redNoseBasePrice], [redNosePriceMax], [redNosePriceMin], [redNoseSold], [redNoseEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', redNoseArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Red Nose's Armor Added");
                        }, 23000);

                    }
                    if (xlData[i].name.includes("Bheg's Gloves")) {
                        var bhegGloveName = xlData[i].name;//
                        var bhegGlovePriceMax = xlData[i].maximum;
                        var bhegGlovePriceMin = xlData[i].minimum;
                        var bhegGloveAmount = xlData[i].count;
                        var bhegGloveBasePrice = xlData[i].price;
                        var bhegGloveEnhancement = xlData[i].enhancement;
                        var bhegGlovesSold = xlData[i].totalTradeCount;
                        var bhegGloveId = xlData[i].id;

                        const bhegGlove = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(bhegGloveName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + bhegGloveId + '.png')
                            .addField('Total Listed', bhegGloveAmount.toLocaleString(), true)
                            .addField('Total Sold', bhegGlovesSold.toLocaleString(), true)
                            .addField('Base Price', bhegGloveBasePrice.toLocaleString(), true)
                            .addField('Max Price', bhegGlovePriceMax.toLocaleString(), true)
                            .addField('Min Price', bhegGlovePriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', bhegGloveEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062241197719633').send(bhegGlove);
                        }, 2000);

                        var bhegGloveArray = [['\n'], [csvBlank], [csvBlank], [bhegGloveName], [bhegGloveAmount], [bhegGloveBasePrice], [bhegGlovePriceMax], [bhegGlovePriceMin], [bhegGlovesSold], [bhegGloveEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', bhegGloveArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Bheg's Gloves Added");
                        }, 24000);

                    }
                    if (xlData[i].name.includes("Giath's Helmet")) {
                        var giathHelmName = xlData[i].name;//
                        var giathHelmPriceMax = xlData[i].maximum;
                        var giathHelmPriceMin = xlData[i].minimum;
                        var giathHelmAmount = xlData[i].count;
                        var giathHelmBasePrice = xlData[i].price;
                        var giathHelmEnhancement = xlData[i].enhancement;
                        var giathHelmSold = xlData[i].totalTradeCount;
                        var giathHelmId = xlData[i].id;

                        const giathHelm = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(giathHelmName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + giathHelmId + '.png')
                            .addField('Total Listed', giathHelmAmount.toLocaleString(), true)
                            .addField('Total Sold', giathHelmSold.toLocaleString(), true)
                            .addField('Base Price', giathHelmBasePrice.toLocaleString(), true)
                            .addField('Max Price', giathHelmPriceMax.toLocaleString(), true)
                            .addField('Min Price', giathHelmPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', giathHelmEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062241197719633').send(giathHelm);
                        }, 2000);

                        var giathHelmArray = [['\n'], [csvBlank], [csvBlank], [giathHelmName], [giathHelmAmount], [giathHelmBasePrice], [giathHelmPriceMax], [giathHelmPriceMin], [giathHelmSold], [giathHelmEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/./Google Drive/Bot/itemData.csv', giathHelmArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Giath's Helmet Added");
                        }, 25000);

                    }
                    if (xlData[i].name.includes("Urugon's Shoes")) {
                        var urugonShoesName = xlData[i].name;//
                        var urugonShoesPriceMax = xlData[i].maximum;
                        var urugonShoesPriceMin = xlData[i].minimum;
                        var urugonShoesAmount = xlData[i].count;
                        var urugonShoesBasePrice = xlData[i].price;
                        var urugonShoesEnhancement = xlData[i].enhancement;
                        var urugonShoesSold = xlData[i].totalTradeCount;
                        var urugonShoesId = xlData[i].id;

                        const urugonShoes = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(urugonShoesName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + urugonShoesId + '.png')
                            .addField('Total Listed', urugonShoesAmount.toLocaleString(), true)
                            .addField('Total Sold', urugonShoesSold.toLocaleString(), true)
                            .addField('Base Price', urugonShoesBasePrice.toLocaleString(), true)
                            .addField('Max Price', urugonShoesPriceMax.toLocaleString(), true)
                            .addField('Min Price', urugonShoesPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', urugonShoesEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062241197719633').send(urugonShoes);
                        }, 2000);

                        var urugonShoesArray = [['\n'], [csvBlank], [csvBlank], [urugonShoesName], [urugonShoesAmount], [urugonShoesBasePrice], [urugonShoesPriceMax], [urugonShoesPriceMin], [urugonShoesSold], [urugonShoesEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/./Google Drive/Bot/itemData.csv', urugonShoesArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Urugon's Shoes Added");
                        }, 26000);

                    }
                    if (xlData[i].name.includes("Kutum Talisman")) {
                        var kutumTName = xlData[i].name;//
                        var kutumTPriceMax = xlData[i].maximum;
                        var kutumTPriceMin = xlData[i].minimum;
                        var kutumTAmount = xlData[i].count;
                        var kutumTBasePrice = xlData[i].price;
                        var kutumTEnhancement = xlData[i].enhancement;
                        var kutumTSold = xlData[i].totalTradeCount;
                        var kutumTId = xlData[i].id;

                        const kutumT = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(kutumTName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + kutumTId + '.png')
                            .addField('Total Listed', kutumTAmount.toLocaleString(), true)
                            .addField('Total Sold', kutumTSold.toLocaleString(), true)
                            .addField('Base Price', kutumTBasePrice.toLocaleString(), true)
                            .addField('Max Price', kutumTPriceMax.toLocaleString(), true)
                            .addField('Min Price', kutumTPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', kutumTEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062622761811968').send(kutumT);
                        }, 2000);

                        var kutumTArray = [['\n'], [csvBlank], [csvBlank], [kutumTName], [kutumTAmount], [kutumTBasePrice], [kutumTPriceMax], [kutumTPriceMin], [kutumTSold], [kutumTEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/"placeholder"/Google Drive/Bot/itemData.csv', kutumTArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Kutum Talisman Added");
                        }, 27000);

                    }
                    if (xlData[i].name.includes("Dandelion Scythe")) {
                        var dandeSName = xlData[i].name;
                        var dandeSPriceMax = xlData[i].maximum;
                        var dandeSPriceMin = xlData[i].minimum;
                        var dandeSAmount = xlData[i].count;
                        var dandeSBasePrice = xlData[i].price;
                        var dandeSEnhancement = xlData[i].enhancement;
                        var dandeSSold = xlData[i].totalTradeCount;
                        var dandeSId = xlData[i].id;

                        const dandeS = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(dandeSName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + dandeSId + '.png')
                            .addField('Total Listed', dandeSAmount.toLocaleString(), true)
                            .addField('Total Sold', dandeSSold.toLocaleString(), true)
                            .addField('Base Price', dandeSBasePrice.toLocaleString(), true)
                            .addField('Max Price', dandeSPriceMax.toLocaleString(), true)
                            .addField('Min Price', dandeSPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', dandeSEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062622761811968').send(dandeS);
                        }, 2000);

                        var dandeSArray = [['\n'], [csvBlank], [csvBlank], [dandeSName], [dandeSAmount], [dandeSBasePrice], [dandeSPriceMax], [dandeSPriceMin], [dandeSSold], [dandeSEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/  /Google Drive/Bot/itemData.csv', dandeSArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Dandelion Scythe Added");
                        }, 28000);

                    }
                    if (xlData[i].name.includes("Crimson Glaives")) {
                        var dandeCgName = xlData[i].name;
                        var dandeCgPriceMax = xlData[i].maximum;
                        var dandeCgPriceMin = xlData[i].minimum;
                        var dandeCgAmount = xlData[i].count;
                        var dandeCgBasePrice = xlData[i].price;
                        var dandeCgEnhancement = xlData[i].enhancement;
                        var dandeCgSold = xlData[i].totalTradeCount;
                        var dandeCgId = xlData[i].id;

                        const dandeCg = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(dandeCgName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + dandeCgId + '.png')
                            .addField('Total Listed', dandeCgAmount.toLocaleString(), true)
                            .addField('Total Sold', dandeCgSold.toLocaleString(), true)
                            .addField('Base Price', dandeCgBasePrice.toLocaleString(), true)
                            .addField('Max Price', dandeCgPriceMax.toLocaleString(), true)
                            .addField('Min Price', dandeCgPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', dandeCgEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062622761811968').send(dandeCg);
                        }, 2000);

                        var dandeCgArray = [['\n'], [csvBlank], [csvBlank], [dandeCgName], [dandeCgAmount], [dandeCgBasePrice], [dandeCgPriceMax], [dandeCgPriceMin], [dandeCgSold], [dandeCgEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/  /Google Drive/Bot/itemData.csv', dandeCgArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Dandelion Crimson Glaives Added");
                        }, 29000);

                    }
                    if (xlData[i].name.includes("Kutum Noble Sword")) {
                        var kutumNsName = xlData[i].name;//
                        var kutumNsPriceMax = xlData[i].maximum;
                        var kutumNsPriceMin = xlData[i].minimum;
                        var kutumNsAmount = xlData[i].count;
                        var kutumNsBasePrice = xlData[i].price;
                        var kutumNsEnhancement = xlData[i].enhancement;
                        var kutumNsSold = xlData[i].totalTradeCount;
                        var kutumNsId = xlData[i].id;

                        const kutumNs = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(kutumNsName + "\n" + timeOfUpdateAuto + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + kutumNsId + '.png')
                            .addField('Total Listed', kutumNsAmount.toLocaleString(), true)
                            .addField('Total Sold', kutumNsSold.toLocaleString(), true)
                            .addField('Base Price', kutumNsBasePrice.toLocaleString(), true)
                            .addField('Max Price', kutumNsPriceMax.toLocaleString(), true)
                            .addField('Min Price', kutumNsPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', kutumNsEnhancement, true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            client.channels.cache.get('730062622761811968').send(kutumNs);
                            console.log("Market Place Updated");
							
							client.channels.cache.get('730062159672901664').stopTyping();
							client.channels.cache.get('730062187439325285').stopTyping();
							client.channels.cache.get('730062241197719633').stopTyping();
							client.channels.cache.get('730062622761811968').stopTyping();
							client.channels.cache.get('729434173621928158').stopTyping();
							client.channels.cache.get('727241046118891565').stopTyping();
							client.channels.cache.get('734082871802986507').stopTyping();
							setTimeout(() => {
								client.user.setActivity("Market Place Updated!" , {type: 'STREAMING', url: 'https://www.twitch.tv/blackdesertonlineofficial'} );
							},9000);
                            client.channels.cache.get('729434173621928158').send('Market place prices have been updated!');
                        }, 2000);

                        var kutumNsArray = [['\n'], [csvBlank], [csvBlank], [kutumNsName], [kutumNsAmount], [kutumNsBasePrice], [kutumNsPriceMax], [kutumNsPriceMin], [kutumNsSold], [kutumNsEnhancement]];

                        setTimeout(() => {
                            fs.appendFile('C:/Users/  /Google Drive/Bot/itemData.csv', kutumNsArray, (err) => {
                                if (err) throw err;
                            });
                            console.log("Kutum Noble Sword Added.\nPrices have been added to the CSV.\nCSV Process finished!")
                            client.users.cache.get('146730334065655808').send('Market place prices have been updated!\nPrice data has been succssfully added to the CSV!');
                            console.log("New time in memory " + statTester)
                            ;
                        }, 30000);

                    }
                }
            }
			
		setTimeout(() => {
			fs.copyFile(pathToFileLatest, pathToNewDestinationOutdated, function (err) {
                if (err) {
                    throw err
                } else {
                    console.log("Copied Latest prices.txt to Outdated prices.txt")
                }
            })
        }, 35000);
		
            setTimeout(() => {
                fs.copyFile(pathToFileBot, pathToNewDestinationLatest, function (err) {
                    if (err) {
                        throw err
                    } else {
                        console.log("Copied Bot prices.txt to Latest prices.txt")
                    }
                })
            }, 40000);

        } else {
			var currentHourReal = new Date().getHours();
			var currentMinReal = new Date().getMinutes();
			var currentSecReal = new Date().getSeconds();
            console.log("Market Place has not changed! Try again later :) " + currentHourReal + ":" + currentMinReal + ":" + currentSecReal);
			client.user.setActivity("Just a casual Turtle" , {type: 'STREAMING', url: 'https://www.twitch.tv/blackdesertonlineofficial'} );
        }
        //

    }, 780000);//600000 10mins 780000 13mins   75000 test amount

    //console.log(client.user.avatarURL());

    //Find channel ID's in discord
    //console.log(client.users);

    //Enter a message on start-up, to star the boss timers
    //client.channels.cache.get('727859626128965699').send('!bossSpawn')
    //client.channels.cache.get('727859626128965699').send('!imperialReset')
    //client.channels.cache.get('727859626128965699').send('!cleanUp')  
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.on('shardError', error => {
	 console.error('A websocket connection encountered an error:', error);
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));

/**
Code below is used to automatically add a new member to a specific role, along with send them a private message
*/

client.on("guildMemberAdd", member => {
	var role = member.guild.roles.cache.find(role => role.name === 'User');
	member.roles.add(role);
	console.log("Assigned role " + "~" + `${role.name}` + "~"  + " to: " + member.user.username)
	//console.log(member)
	client.users.cache.get(member.user.id).send('Hello and welcome to our server. In this server you will find a bunch of fun commands including a Market Place tracker for BDO. This server features day and night cycles, boss timers along with a full command list and some hidden supprises too. I hope you enjoy your stay! ~ Mayo & Koda');
});

/**
Code below is used to detect if a reaction has been made on a specific post defined in the On Ready part of the bot.
*/

client.on('messageReactionAdd', (reaction, user) => {
	var garmothRole = reaction.message.guild.roles.cache.find(role => role.name === 'Garmoth');
	var nouverRole = reaction.message.guild.roles.cache.find(role => role.name === 'Nouver');
	var vellRole = reaction.message.guild.roles.cache.find(role => role.name === 'Vell');
	var kzarkaRole = reaction.message.guild.roles.cache.find(role => role.name === 'Kzarka');
	var karandaRole = reaction.message.guild.roles.cache.find(role => role.name === 'Karanda');
	var kutumRole = reaction.message.guild.roles.cache.find(role => role.name === 'Kutum');
	var offinRole = reaction.message.guild.roles.cache.find(role => role.name === 'Offin');
	var quintRole = reaction.message.guild.roles.cache.find(role => role.name === 'Quint & Muraka');
	
	var member = reaction.message.guild.members.cache.find(member => member.id === user.id)
	let message = reaction.message, emoji = reaction.emoji;

    if (emoji.name == "Garmoth") {
		member.roles.add(garmothRole);
		console.log("Assigned role " + "~ " + `${garmothRole.name}` + " ~"  + " to: " + member.user.username)
    }
	
	if (emoji.name == "Nouver") {
		member.roles.add(nouverRole);
		console.log("Assigned role " + "~ " + `${nouverRole.name}` + " ~"  + " to: " + member.user.username)
    }
	
	if (emoji.name == "Vell") {
		member.roles.add(vellRole);
		console.log("Assigned role " + "~ " + `${vellRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "Kzarka") {
		member.roles.add(kzarkaRole);
		console.log("Assigned role " + "~ " + `${kzarkaRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "Karanda") {
		member.roles.add(karandaRole);
		console.log("Assigned role " + "~ " + `${karandaRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "Kutum") {
		member.roles.add(kutumRole);
		console.log("Assigned role " + "~ " + `${kutumRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "Offin") {
		member.roles.add(offinRole);
		console.log("Assigned role " + "~ " + `${offinRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "QuintMuraka") {
		member.roles.add(quintRole);
		console.log("Assigned role " + "~ " + `${quintRole.name}` + " ~"  + " to: " + member.user.username)
    }		
});

client.on("messageReactionRemove", (reaction, user) => {
	var garmothRole = reaction.message.guild.roles.cache.find(role => role.name === 'Garmoth');
	var nouverRole = reaction.message.guild.roles.cache.find(role => role.name === 'Nouver');
	var vellRole = reaction.message.guild.roles.cache.find(role => role.name === 'Vell');
	var kzarkaRole = reaction.message.guild.roles.cache.find(role => role.name === 'Kzarka');
	var karandaRole = reaction.message.guild.roles.cache.find(role => role.name === 'Karanda');
	var kutumRole = reaction.message.guild.roles.cache.find(role => role.name === 'Kutum');
	var offinRole = reaction.message.guild.roles.cache.find(role => role.name === 'Offin');
	var quintRole = reaction.message.guild.roles.cache.find(role => role.name === 'Quint & Muraka');
	
	var member = reaction.message.guild.members.cache.find(member => member.id === user.id)
	let message = reaction.message, emoji = reaction.emoji;

    if (emoji.name == "Garmoth") {
		member.roles.remove(garmothRole);
		console.log("Removed role " + "~ " + `${garmothRole.name}` + " ~"  + " to: " + member.user.username)
    }
	
	if (emoji.name == "Nouver") {
		member.roles.remove(nouverRole);
		console.log("Removed role " + "~ " + `${nouverRole.name}` + " ~"  + " to: " + member.user.username)
    }
	
	if (emoji.name == "Vell") {
		member.roles.remove(vellRole);
		console.log("Removed role " + "~ " + `${vellRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "Kzarka") {
		member.roles.remove(kzarkaRole);
		console.log("Removed role " + "~ " + `${kzarkaRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "Karanda") {
		member.roles.remove(karandaRole);
		console.log("Removed role " + "~ " + `${karandaRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "Kutum") {
		member.roles.remove(kutumRole);
		console.log("Removed role " + "~ " + `${kutumRole.name}` + " ~"  + " to: " + member.user.username)
    }	
	
	if (emoji.name == "Offin") {
		member.roles.remove(offinRole);
		console.log("Removed role " + "~ " + `${offinRole.name}` + " ~"  + " to: " + member.user.username)
    }		
	
	if (emoji.name == "QuintMuraka") {
		member.roles.remove(quintRole);
		console.log("Assigned role " + "~ " + `${quintRole.name}` + " ~"  + " to: " + member.user.username)
    }	
});

client.on('message', async msg => {
	
/**
const garmothEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'Garmoth');
const nouverEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'Nouver');
const vellEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'Vell');
const kzarkaEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'Kzarka');
const karandaEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'Karanda');
const offinEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'Offin');
const quintEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'QuintMuraka');

	if(msg.author.bot){
		if(msg.embeds){
			const bossRoles = msg.embeds.find(msg => msg.title === "Boss Roles")
			const bumMsg = msg.embeds.find(msg => msg.title === "Noice")
			if(bossRoles){
				msg.react(garmothEmoji)
				msg.react(nouverEmoji)
				msg.react(vellEmoji)
			}
			if(bumMsg){
				const emojiB = msg.guild.emojis.cache.find(emoji => emoji.name === 'B_');
				const emojiU = msg.guild.emojis.cache.find(emoji => emoji.name === 'U_');
				const emojiM = msg.guild.emojis.cache.find(emoji => emoji.name === 'M_');
				msg.react(emojiB)
				msg.react(emojiU)
				msg.react(emojiM)
			}
		}
	}
*/
	
	/**
	Code below is used to find an embed message with a title, and automatically add a reaction to it
	
	const testingEmbed = new Discord.MessageEmbed()
        .setColor('#089e65')
		.setTitle("Testing")
        .setTimestamp()
        .setFooter(client.user.username, client.user.avatarURL());
        msg.channel.send(testingEmbed);
	*/
	
	/**
	msg.channel.send(res.text + " Sent by: " + member.author.username + res.from.language.iso + " > en")
	console.log(res.text);
	console.log(res.from.language.iso);
	*/
	
	var langTranslate = msg.content;
	var en = "en";

	translate(langTranslate, {to: 'en'}).then(res => {
	if(res.from.language.iso != 'en'){
		
		const translation = new Discord.MessageEmbed()
			.setColor('#089e65')
			.setTitle("Sent by: " +  member.author.username)
            .addField('Translated Text: ', res.text, true)
            .addField('From: ', res.from.language.iso, true)
            .addField('To: ', en, true)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL());
        msg.channel.send(translation);
	
	}   
	}).catch(err => {
		console.error(err);
	});
	

	if(msg.author.bot){
		if(msg.embeds){
			const bumMsg = msg.embeds.find(msg => msg.title === "Noice")
			if(bumMsg){
				const emojiB = msg.guild.emojis.cache.find(emoji => emoji.name === 'B_');
				const emojiU = msg.guild.emojis.cache.find(emoji => emoji.name === 'U_');
				const emojiM = msg.guild.emojis.cache.find(emoji => emoji.name === 'M_');
				msg.react(emojiB)
				msg.react(emojiU)
				msg.react(emojiM)
			}
		}
	}
	
	/**
	Below are console commands that can provbide information about the server or users
	
	console.log(msg.guild.emojis.cache)
	console.log(msg)
	
	
	Used to get a specific message at ID
	
	msg.channel.messages.fetch("735433073453432912")
	.then(msg => console.log(msg.content))
	.catch(console.error);
	
	Get presence and activity status of users
	
	//console.log(client.users.cache.get('727575167282184235').presence.activities[0].name)
	//console.log(client.user.presence)
	//console.log(msg.author.presence.activities[0].name)		'Market place prices have been updated!'
	//console.log(client.users.cache.get('146730334065655808').presence)
	*/
	
	
	/**
	Code below is used to console output any dm the bot recieves along with send a response back
	*/
	const member = msg;
	if(member.channel.type === 'dm'){
		console.log(member.channel.type + " " + member.author.username +" " + msg.content)
	}else if(member.channel.type != 'dm'){
		console.log(member.channel.name + " " + member.author.username +" " + msg.content)
	}
	
	if(msg.channel.type === "dm" && msg.author.id != client.user.id){
		msg.reply(":hugging:")
	}

    //Channel ID's for reference in commands
    const general = client.channels.cache.get('727241046118891565');
    const bossAlerts = client.channels.cache.get('727863842645868555');
    const resources = client.channels.cache.get('727242108804530269');
    const botCommands = client.channels.cache.get('727242133198733323');
    const korea = client.channels.cache.get('727274109129457764');
    const usefulStuff = client.channels.cache.get('727412011062919218');
    const botStartup = client.channels.cache.get('727859626128965699');
    const lenMusic = client.channels.cache.get('727274096446013521');
    const bdoNews = client.channels.cache.get('727978278580650164');
    const ideaBrainstorm = client.channels.cache.get('728549042333679648');
    const itemSearch = client.channels.cache.get('729434173621928158');

    if (msg.channel.id === '727241046118891565' || '727863842645868555' || '727242108804530269' || '727242133198733323' || '727274096446013521' || '727274109129457764' || '727412011062919218' || '727859626128965699' || '727978278580650164' || '728549042333679648') {
        if (msg.content.includes('bum') || msg.content.includes('Bum')) {
			    const bumGif = new Discord.MessageEmbed()
                .setColor('#b50721')
				.setTitle("Noice")
                .setImage("https://thumbs.gfycat.com/UglyAmpleGoldenretriever-size_restricted.gif")
                .setTimestamp()
                .setFooter(client.user.username, client.user.avatarURL());
                msg.reply(bumGif);
        }
    }
	
	if (msg.content.includes('nice guy') || msg.content.includes('Nice guy')) {
		client.users.cache.get('131078703831580672').send('Hi ChinMfCho, how are you? Have you been well? Sending hugs ~ Mayo');
    }
		
	if (msg.content.includes('moo') || msg.content.includes('Moo')) {
		client.users.cache.get('109690538692730880').send('HI MR MOO, hows life?');
    }
	
    if (!msg.content.startsWith(prefix)) return;
    var args = msg.content.slice(prefix.length).split(' ');
    var command = args.shift();

    var msgarr = msg.content.split(" ")
    var opts = parseArgs(msgarr)
    delete opts._

    var itemArgs = msg.content.slice(prefix.length).split('.')
    //var itemArgs2 = msg.content.slice(prefix.length).split(' ')
    //var itemArgs = itemArgs2.slice(1).join(' ')
    var enhancementArgs = msg.content.slice(prefix.length).split('.')

    var statTester;


    if (command == "testing") { 
//console.log(client.users.cache.get('153337601879834624').presence)
//refer to imagesearch

    }
	
    if (command === "price") {
        var workbook = XLSX.readFile('C:/Users/  /Google Drive/Bot/prices.txt');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        var stats = fs.statSync('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
        var updateTime = stats.mtime.toString();

        const options = {day: "numeric", month: "long", hour: "numeric", minute: "numeric"};
        const date = new Date(updateTime);
        const timeOfUpdate = new Intl.DateTimeFormat("en-GB", options).format(date);

        var names = itemArgs[1];
        var enhancementGrade;
        if (enhancementArgs[2] != null) enhancementGrade = enhancementArgs[2]

        function capitalize_Words(str) {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }

        var array = [];

        var item1Name = "";

        var item1basePrice = "";

        var item1enhancementLvl = "";

        var item1itemPriceMax = "";

        var item1itemPriceMin = "";

        var item1amount;

        var item1totalSold = "";

        var item1Id;

        var finishedItem = "";
        var finishedItem1 = "";


        var totalItems = "t";

        console.log(names);
        console.log(enhancementGrade);
        for (var i = 0; i < xlData.length; i++) {
            if (xlData[i].name.includes(capitalize_Words(names)) && xlData[i].enhancement == enhancementGrade) {
                console.log(i);
                var itemName = xlData[i].name;
                var enhancementLvl = xlData[i].enhancement;
                var itemPriceMax = xlData[i].maximum;
                var itemPriceMin = xlData[i].minimum;
                var amount = xlData[i].count;
                var basePrice = xlData[i].price;
                var totalSold = xlData[i].totalTradeCount;
                var itemId = xlData[i].id;

                finishedItem = itemName + " " + enhancementLvl + " " + itemPriceMax
                    + " " + itemPriceMin + " " + amount + " " + totalSold;

                array.push(finishedItem);

                console.log(array);

                if (array.length == 1) {
                    item1Name = itemName;
                    item1enhancementLvl = enhancementLvl;
                    item1itemPriceMax = itemPriceMax;
                    item1itemPriceMin = itemPriceMin;
                    item1amount = amount;
                    item1totalSold = totalSold;
                    item1basePrice = basePrice;
                    item1Id = itemId;

                }
                const marketEmbed155 = new Discord.MessageEmbed()
                    .setColor('#089e65')
                    .setTitle(item1Name + "\n" + timeOfUpdate + " (UK)")
                    .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item1Id + '.png')
                    .addField('Enhancement Level', item1enhancementLvl, true)
                    .addField('Total Listed', item1amount.toLocaleString(), true)
                    .addField('Total Sold', item1totalSold.toLocaleString(), true)
                    .addField('Base Price', item1basePrice.toLocaleString(), true)
                    .addField('Max Price', item1itemPriceMax.toLocaleString(), true)
                    .addField('Min Price', item1itemPriceMin.toLocaleString(), true)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                setTimeout(() => {
                    msg.channel.send(marketEmbed155);
                }, 1000);

            }
        }

    }

    if (command === "prices") {
        var workbook = XLSX.readFile('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        var stats = fs.statSync('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
        var updateTime = stats.mtime.toString();

        //var testingTime = stats.mtime.toString();
        //msg.channel.send("Last updated on: " + stats.mtime.toString());

        const options = {day: "numeric", month: "long", hour: "numeric", minute: "numeric"};
        const date = new Date(updateTime);
        const timeOfUpdate = new Intl.DateTimeFormat("en-GB", options).format(date);

        //console.log(americanDate);
        //msg.reply(testing);

        /**
         var names = priceArgs[0];

         if(names.includes("read")){
				names = names.replace("read", "");
				//msg.reply(name);
			}



         fs.stat('C:/Users/"placeholder"/Google Drive/Bot/prices.txt', (err, stats) => {
				if(err){
					throw err;
				}
				
			});



         var itemName = names;


         //var enhancementLvl  = priceArgs[priceArgs.length]

         //msg.reply(name);

         msg.reply(itemName);
         var enhancementLvl  = priceArgs[1];
         msg.reply(enhancementLvl);

         //var name1  = priceArgs[0];

         //msg.reply(name1);

         //msg.reply(enhancementLvl);

         if(xlData[i].enhancement == enhancementLvl){
			
         */

            //this works
        var names = itemArgs[1];
        var enhancementGrade;

        function capitalize_Words(str) {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }

        //msg.reply(names);
        //this works

        //var enhanceLvl  = itemArgs[2].toString().split('read ')

        //msg.reply(name);

        //var enhanceLvl = names.match(/\d+/g).map(Number);
        //msg.reply(enhanceLvl);

        //var item = args[0];
        //var item2 = args[1];
        //var itemCombined = item + " " + item2;

        //if(item.includes("read")){
        //	item = item.replace("read", ".");

        //var needle = itemCombined;
        //var enhancementLvl = '0';
        //

        var array = [];

        var enchantmentArray = [];

        var item1Name = "";
        var item2Name = "";
        var item3Name = "";
        //var item4Name = "";
        //var item5Name = "";

        var item1basePrice = "";
        var item2basePrice = "";
        var item3basePrice = "";
        //var item4basePrice = "";
        //var item5basePrice = "";

        var item1enhancementLvl = "";
        var item2enhancementLvl = "";
        var item3enhancementLvl = "";
        //var item4enhancementLvl = "";
        //var item5enhancementLvl = "";

        var item1itemPriceMax = "";
        var item2itemPriceMax = "";
        var item3itemPriceMax = "";
        //var item4itemPriceMax = "";
        //var item5itemPriceMax = "";

        var item1itemPriceMin = "";
        var item2itemPriceMin = "";
        var item3itemPriceMin = "";
        //var item4itemPriceMin = "";
        //var item5itemPriceMin = "";

        var item1amount;
        var item2amount = "";
        var item3amount = "";
        //var item4amount = "";
        //var item5amount = "";

        var item1totalSold = "";
        var item2totalSold = "";
        var item3totalSold = "";

        var item1Id;
        var item2Id = "";
        var item3Id = "";

        var finishedItem = "";
        var finishedItem1 = "";
        var finishedItem2 = "";
        var finishedItem3 = "";
        //var finishedItem4 = "";
        //var finishedItem5 = "";

        var totalItems = "t";

        var enchantment1 = "1";
        var enchantment2 = "2";
        var enchantment3 = "3";
        var enchantment4 = "4";
        var enchantment5 = "5";
        var enchantment6 = "6";
        var enchantment7 = "7";
        var enchantment8 = "8";
        var enchantment9 = "9";
        var enchantment10 = "10";
        var enchantment11 = "11";
        var enchantment12 = "12";
        var enchantment13 = "13";
        var enchantment14 = "14";
        var enchantment15 = "15";
        var enchantment16 = "16";
        var enchantment17 = "17";
        var enchantment18 = "18";
        var enchantment19 = "19";
        var enchantment20 = "20";

        for (var i = 0; i < xlData.length; i++) {
            if (xlData[i].name.includes(capitalize_Words(names))) {

                //console.log(xlData[i]);
                //console.log(enhancementGrade);
                console.log(i);
                var itemName = xlData[i].name;
                var enhancementLvl = xlData[i].enhancement;
                var itemPriceMax = xlData[i].maximum;
                var itemPriceMin = xlData[i].minimum;
                var amount = xlData[i].count;
                var basePrice = xlData[i].price;
                var totalSold = xlData[i].totalTradeCount;
                var itemId = xlData[i].id;

                finishedItem = itemName + " " + enhancementLvl + " " + itemPriceMax
                    + " " + itemPriceMin + " " + amount + " " + totalSold;
//
                //var name = xlData[i].name;

                array.push(finishedItem);
                //console.log(itemId + "Item Name " + itemName);
                console.log(array);
                //console.log(array.length);


                if (array.length == 1) {
                    item1Name = itemName;
                    item1enhancementLvl = enhancementLvl;
                    item1itemPriceMax = itemPriceMax;
                    item1itemPriceMin = itemPriceMin;
                    item1amount = amount;
                    item1totalSold = totalSold;
                    item1basePrice = basePrice;
                    item1Id = itemId;

                    //finishedItem1 = item1Name + " " + item1enhancementLvl + " " + item1itemPriceMax
                    //+ " " + item1itemPriceMin + " " + item1amount;
                }
                if (array.length == 2) {
                    item2Name = itemName;
                    item2enhancementLvl = enhancementLvl;
                    item2itemPriceMax = itemPriceMax;
                    item2itemPriceMin = itemPriceMin;
                    item2amount = amount;
                    item2totalSold = totalSold;
                    item2basePrice = basePrice;
                    item2Id = itemId;
                    //						finishedItem2 = item2Name + " " + item2enhancementLvl + " " + item2itemPriceMax
                    //+ " " + item2itemPriceMin + " " + item2amount;

                }
                if (array.length == 3) {

                    item3Name = itemName;
                    item3enhancementLvl = enhancementLvl;
                    item3itemPriceMax = itemPriceMax;
                    item3itemPriceMin = itemPriceMin;
                    item3amount = amount;
                    item3totalSold = totalSold;
                    item3basePrice = basePrice;
                    item3Id = itemId;

                    if (item1Name == item2Name && item1Name == item3Name) {

                        const marketEmbedTest = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(item1Name + "\n" + timeOfUpdate + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item1Id + '.png')
                            .addField('Enhancement Level', item1enhancementLvl, true)
                            .addField('Total Listed', item1amount.toLocaleString(), true)
                            .addField('Total Sold', item1totalSold.toLocaleString(), true)
                            .addField('Base Price', item1basePrice.toLocaleString(), true)
                            .addField('Max Price', item1itemPriceMax.toLocaleString(), true)
                            .addField('Min Price', item1itemPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', item2enhancementLvl, true)
                            .addField('Total Listed', item2amount.toLocaleString(), true)
                            .addField('Total Sold', item2totalSold.toLocaleString(), true)
                            .addField('Base Price', item2basePrice.toLocaleString(), true)
                            .addField('Max Price', item2itemPriceMax.toLocaleString(), true)
                            .addField('Min Price', item2itemPriceMin.toLocaleString(), true)
                            .addField('Enhancement Level', item3enhancementLvl, true)
                            .addField('Total Listed', item3amount.toLocaleString(), true)
                            .addField('Total Sold', item3totalSold.toLocaleString(), true)
                            .addField('Base Price', item3basePrice.toLocaleString(), true)
                            .addField('Max Price', item3itemPriceMax.toLocaleString(), true)
                            .addField('Min Price', item3itemPriceMin.toLocaleString(), true)
                            //.addField('\u200B', '\u200B', true)
                            /**
                             .addField('Enhancement Level', item4enhancementLvl, true)
                             .addField('Total Listed', item4amount, true)
                             .addField('Base Price', item4basePrice, true)
                             .addField('Max Price', item4itemPriceMax, true)
                             .addField('Min Price', item4itemPriceMin, true)
                             .addField('\u200B', '\u200B', true)
                             .addField('Enhancement Level', item5enhancementLvl, true)
                             .addField('Total Listed', item5amount, true)
                             .addField('Base Price', item5basePrice, true)
                             .addField('Max Price', item5itemPriceMax, true)
                             .addField('Min Price', item5itemPriceMin, true)
                             .setTimestamp()
                             */
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            msg.channel.send(marketEmbedTest);
                        }, 1000);
                    } else {

                        const marketEmbed1 = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(item1Name + "\n" + timeOfUpdate + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item1Id + '.png')
                            .addField('Enhancement Level', item1enhancementLvl, true)
                            .addField('Total Listed', item1amount.toLocaleString(), true)
                            .addField('Total Sold', item1totalSold.toLocaleString(), true)
                            .addField('Base Price', item1basePrice.toLocaleString(), true)
                            .addField('Max Price', item1itemPriceMax.toLocaleString(), true)
                            .addField('Min Price', item1itemPriceMin.toLocaleString(), true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            msg.channel.send(marketEmbed1);
                        }, 1000);


                        const marketEmbed2 = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(item2Name + "\n" + timeOfUpdate + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item2Id + '.png')
                            .addField('Enhancement Level', item2enhancementLvl, true)
                            .addField('Total Listed', item2amount.toLocaleString(), true)
                            .addField('Total Sold', item2totalSold.toLocaleString(), true)
                            .addField('Base Price', item2basePrice.toLocaleString(), true)
                            .addField('Max Price', item2itemPriceMax.toLocaleString(), true)
                            .addField('Min Price', item2itemPriceMin.toLocaleString(), true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            msg.channel.send(marketEmbed2);
                        }, 1000);


                        const marketEmbed3 = new Discord.MessageEmbed()
                            .setColor('#089e65')
                            .setTitle(item3Name + "\n" + timeOfUpdate + " (UK)")
                            .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item3Id + '.png')
                            .addField('Enhancement Level', item3enhancementLvl, true)
                            .addField('Total Listed', item3amount.toLocaleString(), true)
                            .addField('Total Sold', item3totalSold.toLocaleString(), true)
                            .addField('Base Price', item3basePrice.toLocaleString(), true)
                            .addField('Max Price', item3itemPriceMax.toLocaleString(), true)
                            .addField('Min Price', item3itemPriceMin.toLocaleString(), true)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        setTimeout(() => {
                            msg.channel.send(marketEmbed3);
                        }, 1000);


                    }

                    totalItems = "";
                    array = [];
                    //						finishedItem3 = item3Name + " " + item3enhancementLvl + " " + item3itemPriceMax
                    //+ " " + item3itemPriceMin + " " + item3amount;
                }
                //if(array.length == 4){
                //	item4Name = itemName;
                //	item4enhancementLvl = enhancementLvl;
                //	item4itemPriceMax = itemPriceMax;
                //	item4itemPriceMin = itemPriceMin;
                //	item4amount = amount;
                //	item4basePrice = basePrice;
                //						finishedItem4 = item4Name + " " + item4enhancementLvl + " " + item4itemPriceMax
                //+ " " + item4itemPriceMin + " " + item4amount;
            }
            //if(array.length == 5){
            //	item5Name = itemName;
            //	item5enhancementLvl = enhancementLvl;
            //	item5itemPriceMax = itemPriceMax;
            //	item5itemPriceMin = itemPriceMin;
            //	item5amount = amount;
            //	item5basePrice = basePrice;

            /**
             const marketEmbed1 = new Discord.MessageEmbed()
             .setColor('#089e65')
             .setTitle(item1Name)
             .addField('Enhancement Level', item1enhancementLvl, true)
             .addField('Total Listed', item1amount, true)
             .addField('Base Price', item1basePrice, true)
             .addField('Max Price', item1itemPriceMax, true)
             .addField('Min Price', item1itemPriceMin, true)
             .setTimestamp()
             msg.channel.send(marketEmbed1);

             const marketEmbed2 = new Discord.MessageEmbed()
             .setColor('#089e65')
             .setTitle(item2Name)
             .addField('Enhancement Level', item2enhancementLvl, true)
             .addField('Total Listed', item2amount, true)
             .addField('Base Price', item2basePrice, true)
             .addField('Max Price', item2itemPriceMax, true)
             .addField('Min Price', item2itemPriceMin, true)
             .setTimestamp()
             msg.channel.send(marketEmbed2);
             */

            //finishedItem5 = item5Name + " " + item5enhancementLvl + " " + //item5itemPriceMax
            //+ " " + item5itemPriceMin + " " + item5amount;


            //totalItems = finishedItem1 + "\n" + finishedItem2 + "\n" +  finishedItem3 + "\n" +
            //finishedItem4 + "\n" + finishedItem5;
            //msg.channel.send(totalItems)
            //totalItems = "";
            //array = [];
        }

        //if(item1Name == item2Name){
        //	msg.channel.send("test naems same")
        //}

        /**
         if(amount == 0){
						const itemEmbed = new Discord.MessageEmbed()
					.setColor('#1c871a')
					.setTitle(itemName)
					.setThumbnail('https://bdocodex.com/items/new_icon/03_etc/03_quest_item/00041583.png%27')
					.addFields(
					{ name: 'Enhancement Level', value: enhancementLvl, inline: true },
					{ name: 'Max Price', value: itemPriceMax, inline: true },
					{ name: 'Min Price', value: itemPriceMin, inline: true },
				//	{ name: 'Amount Listed', value: amount, inline: true },
					)
					.setTimestamp()
					.setFooter(client.user.username, client.user.avatarURL());
					msg.channel.send(itemEmbed);
					}

         if(amount != 0){
												const itemEmbed = new Discord.MessageEmbed()
					.setColor('#1c871a')
					.setTitle(itemName)
					.setThumbnail('https://bdocodex.com/items/new_icon/03_etc/03_quest_item/00041583.png%27')
					.addFields(
					{ name: 'Enhancement Level', value: enhancementLvl, inline: true },
					{ name: 'Max Price', value: itemPriceMax, inline: true },
					{ name: 'Min Price', value: itemPriceMin, inline: true },
					{ name: 'Amount Listed', value: amount, inline: true },
					)
					.setTimestamp()
					 .setFooter(client.user.username, client.user.avatarURL());
					msg.channel.send(itemEmbed);
					}
         */

        if (array != "") {
            if (item1Name == item2Name) {
                const marketEmbedTests = new Discord.MessageEmbed()
                    .setColor('#089e65')
                    .setTitle(item1Name + "\n" + timeOfUpdate + " (UK)")
                    .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item1Id + '.png')
                    .addField('Enhancement Level', item1enhancementLvl, true)
                    .addField('Total Listed', item1amount.toLocaleString(), true)
                    .addField('Total Sold', item1totalSold.toLocaleString(), true)
                    .addField('Base Price', item1basePrice.toLocaleString(), true)
                    .addField('Max Price', item1itemPriceMax.toLocaleString(), true)
                    .addField('Min Price', item1itemPriceMin.toLocaleString(), true)
                    .addField('Enhancement Level', item2enhancementLvl, true)
                    .addField('Total Listed', item2amount.toLocaleString(), true)
                    .addField('Total Sold', item2totalSold.toLocaleString(), true)
                    .addField('Base Price', item2basePrice.toLocaleString(), true)
                    .addField('Max Price', item2itemPriceMax.toLocaleString(), true)
                    .addField('Min Price', item2itemPriceMin.toLocaleString(), true)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                setTimeout(() => {
                    msg.channel.send(marketEmbedTests)
                }, 1000);


            } else if (array.length == 1) {
                const marketEmbed111 = new Discord.MessageEmbed()
                    .setColor('#089e65')
                    .setTitle(item1Name + "\n" + timeOfUpdate + " (UK)")
                    .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item1Id + '.png')
                    .addField('Enhancement Level', item1enhancementLvl, true)
                    .addField('Total Listed', item1amount.toLocaleString(), true)
                    .addField('Total Sold', item1totalSold.toLocaleString(), true)
                    .addField('Base Price', item1basePrice.toLocaleString(), true)
                    .addField('Max Price', item1itemPriceMax.toLocaleString(), true)
                    .addField('Min Price', item1itemPriceMin.toLocaleString(), true)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                setTimeout(() => {
                    msg.channel.send(marketEmbed111);
                }, 1000);


            } else if (array.length == 2) {
                const marketEmbed151 = new Discord.MessageEmbed()
                    .setColor('#089e65')
                    .setTitle(item1Name + "\n" + timeOfUpdate + " (UK)")
                    .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item1Id + '.png')
                    .addField('Enhancement Level', item1enhancementLvl, true)
                    .addField('Total Listed', item1amount.toLocaleString(), true)
                    .addField('Total Sold', item1totalSold.toLocaleString(), true)
                    .addField('Base Price', item1basePrice.toLocaleString(), true)
                    .addField('Max Price', item1itemPriceMax.toLocaleString(), true)
                    .addField('Min Price', item1itemPriceMin.toLocaleString(), true)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                setTimeout(() => {
                    msg.channel.send(marketEmbed151);
                }, 1000);


                const marketEmbed1114 = new Discord.MessageEmbed()
                    .setColor('#089e65')
                    .setTitle(item2Name + "\n" + timeOfUpdate + " (UK)")
                    .setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/' + item2Id + '.png')
                    .addField('Enhancement Level', item2enhancementLvl, true)
                    .addField('Total Listed', item2amount.toLocaleString(), true)
                    .addField('Total Sold', item2totalSold.toLocaleString(), true)
                    .addField('Base Price', item2basePrice.toLocaleString(), true)
                    .addField('Max Price', item2itemPriceMax.toLocaleString(), true)
                    .addField('Min Price', item2itemPriceMin.toLocaleString(), true)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                setTimeout(() => {
                    msg.channel.send(marketEmbed1114);
                }, 1000);

            }
        }

        /**
         const filter = m => m.author.id === msg.author.id;
         setTimeout(() => { msg.reply("Enter enchantment level of your searched item!"); }, 3000);
         msg.channel.awaitMessages(filter, {max: 1, time: 15000}).then(collected => {
						
						if(collected.first().content === enchantment1 || enchantment2 || enchantment3 || enchantment4 || enchantment5 || enchantment6 || enchantment7 || enchantment8 || enchantment9 || enchantment10 || enchantment11 || enchantment12 || enchantment13 || enchantment14 || enchantment15 || enchantment16 || enchantment17 || enchantment18 || enchantment19 || enchantment20){
						var test = collected.first().content;
						//msg.reply("hello");
						//msg.reply("You said " + test);
						console.log(test);
						console.log(capitalize_Words(names));
						
						for (var i = 0; i < xlData.length; i++){
							var enchantmentTest = xlData[i].enchantment = test;
							if (xlData[i].name.includes(capitalize_Words(names)) && xlData[i].enchantment === enchantmentTest){
					//console.log(xlData[i]);
					//console.log(enhancementGrade);
					console.log(i);
					var itemName = xlData[i].name;
					var enhancementLvl = xlData[i].enhancement;
					var itemPriceMax = xlData[i].maximum;
					var itemPriceMin = xlData[i].minimum;
					var amount = xlData[i].count;
					var basePrice = xlData[i].price;
					var totalSold = xlData[i].totalTradeCount;
					var itemId = xlData[i].id;
					
					finishedItem = itemName + " " + enhancementLvl + " " + itemPriceMax
					+ " " + itemPriceMin + " " + amount + " " + totalSold;
//
					//var name = xlData[i].name;
					if(enhancementLvl == collected.first().content){
					enchantmentArray.push(finishedItem);
					//console.log(itemId + "Item Name " + itemName);
					console.log(enchantmentArray);
					
					if(enchantmentArray.length == 1){
					item1Name = itemName;
					item1enhancementLvl = enhancementLvl;
					item1itemPriceMax = itemPriceMax;
					item1itemPriceMin = itemPriceMin;
					item1amount = amount;
					item1totalSold = totalSold;
					item1basePrice = basePrice;
					item1Id = itemId;
					}
						const marketEmbed199 = new Discord.MessageEmbed()
						.setColor('#089e65')
						.setTitle(item1Name + "\n" + timeOfUpdate + " (UK)")
						.setThumbnail('https://akamai-webcdn.kgstatic.net/TradeMarket/Common/img/BDO/item/'+item1Id+'.png')
						.addField('Enhancement Level', item1enhancementLvl, true)
						.addField('Total Listed', item1amount.toLocaleString(), true)
						.addField('Total Sold', item1totalSold.toLocaleString(), true)
						.addField('Base Price', item1basePrice.toLocaleString(), true)
						.addField('Max Price', item1itemPriceMax.toLocaleString(), true)
						.addField('Min Price', item1itemPriceMin.toLocaleString(), true)
						.setTimestamp()
						.setFooter(client.user.username, client.user.avatarURL());
						setTimeout(() => { msg.channel.send(marketEmbed199); }, 1000);	
					//console.log(array.length);		
					
					}
	
	
						
						
							
							}
							}
							}	
								
					})
         */

    }

    //msg.channel.send("Last updated on: " + stats.mtime.toString());

    //console.log(" test " + array);

    //console.log('https://bdocodex.com/items/new_icon/03_etc/03_quest_item/'+itemId+'.png');
    //msg.channel.send(array);


    //var item = "Buy " + itemName + " for a max price of " + itemPriceMax + ", and a min price of " + itemPriceMin + ". //There are currently " + amount + " on the market right now with an enchantment level of  " + enhancementLvl;

    //msg.reply(item);

    //}


    //}


    if (command == "mptax") {
        var number1 = args[0];
        var number2 = args[1];
        var percentage = 0;

        var y = number1;
        var u = number2;

        var o;
        var p;

        var mpTaxMe = new Map([
            [mayo, '0.84825'], [koda, '0.8515']
        ]);
        for (const [id, taxAmount] of mpTaxMe.entries()) {
            if (id == msg.author.id) {
                percentage = taxAmount;
                o = y * u;
                p = o * percentage;

                const mpTaxEmbed = new Discord.MessageEmbed()
                    .setColor('#089e65')
                    .setTitle('Market Tax Calculations')
                    .addField('Before Tax', o.toLocaleString(), true)
                    .addField('After Tax', p.toLocaleString(), true)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                msg.reply(mpTaxEmbed);
            }
        }
    }

    if (command === "relic") {

        var workbook = XLSX.readFile('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        for (var i = 0; i < xlData.length; i++) {
            if (xlData[i].name.includes('Memory Fragment')) {
                var memPrice = xlData[i].minimum;
                //console.log(xlData[i]);
            }
            if (xlData[i].id == '16002') {
                var bsPrice = xlData[i].minimum;
            }
            if (xlData[i].name == 'Ancient Relic Crystal Shard') {
                var relicPrice = xlData[i].minimum;
            }
        }

        var numberRelics = args[0]
        if (args[1] != null) memPrice = args[1]
        if (args[2] != null) bsPrice = args[2]

        var memesRelics = numberRelics * 5
        var bsRelics = numberRelics * 3
        var maf = numberRelics * 27
        var spear = numberRelics * 17
        var ronr = Math.floor(numberRelics * 20.445)
        var rof = Math.floor(numberRelics * 16.265)
        var sumRelics = ((memesRelics * memPrice + bsRelics * bsPrice) * 0.845) + Math.floor(maf * 100000) + Math.floor(spear * 125000) + Math.floor(ronr * 450) + Math.floor(rof * 375)
        var profitRelics = sumRelics - (relicPrice * numberRelics * 5)
        var relicsROI = profitRelics / sumRelics * 100
        const relicsEmbed = new Discord.MessageEmbed()
            .setColor('#1c871a')
            .setTitle('Relics Average Outcome')
            .setDescription(`Your expected outcome for ${numberRelics} Scrolls based on averages is`)
            .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/03_quest_item/00041583.png')
            .addFields(
                {name: 'Memory Fragment', value: Math.round(memesRelics), inline: true},
                {name: 'Black Stone (Armor)', value: Math.round(bsRelics), inline: true},
                {name: 'Metal Armor Fragment', value: Math.round(maf), inline: true},
                {name: 'Huge Spear', value: Math.round(spear), inline: true},
                {name: 'Red Orc Nose Ring', value: Math.round(ronr), inline: true},
                {name: 'Red Orc Fang', value: Math.round(rof), inline: true},
            )
            .addField('The total estimated value after taxes is', Math.round(sumRelics).toLocaleString(), true)
            .addField('Your estimated profit is', Math.round(profitRelics).toLocaleString(), true)
            .addField(`ROI`, `${relicsROI.toFixed(2)}%`, true)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL());
        msg.reply(relicsEmbed)

    }

    if (command === "pilafe") {

        var workbook = XLSX.readFile('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        for (var i = 0; i < xlData.length; i++) {
            if (xlData[i].name.includes('Memory Fragment')) {
                var memPrice = xlData[i].minimum;
                //console.log(xlData[i]);
            }
            if (xlData[i].id == '16002') {
                var bsPrice = xlData[i].minimum;
            }
            if (xlData[i].name == 'Scroll Written in Ancient Language') {
                var pilaPrice = xlData[i].minimum;
            }
        }

        var numberPila = args[0]
        if (args[1] != null) memPrice = args[1]
        if (args[2] != null) bsPrice = args[2]
        var memesPila = numberPila * 6.96
        var bsPila = numberPila * 1.47
        var mbw = numberPila * 52.07
        var sumPila = ((memesPila * memPrice + bsPila * bsPrice) * 0.845) + Math.floor(mbw * 1050)
        var profitPila = sumPila - (pilaPrice * numberPila * 5)
        var pilaROI = profitPila / sumPila * 100
        const pilafeEmbed = new Discord.MessageEmbed()
            .setColor('#7d9ae3')
            .setTitle('Pila Fe Average Outcome')
            .setDescription(`Your expected outcome for ${numberPila} Scrolls based on averages is`)
            .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/03_quest_item/00041595.png')
            .addFields(
                {name: 'Memory Fragment', value: Math.round(memesPila), inline: true},
                {name: 'Black Stone (Armor)', value: Math.round(bsPila), inline: true},
                {name: 'Mutant Bat Wing', value: Math.round(mbw), inline: true},
            )
            .addField('The total estimated value after taxes is', Math.round(sumPila).toLocaleString(), true)
            .addField('Your estimated profit is', Math.round(profitPila).toLocaleString(), true)
            .addField(`ROI`, `${pilaROI.toFixed(2)}%`, true)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL());
        msg.reply(pilafeEmbed)
        console.log(Math.round(profitPila));
    }

    if (command === "voodoo") {

        var workbook = XLSX.readFile('C:/Users/"placeholder"/Google Drive/Bot/prices.txt');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        for (var i = 0; i < xlData.length; i++) {
            if (xlData[i].name.includes('Memory Fragment')) {
                var memPrice = xlData[i].minimum;
                //console.log(xlData[i]);
            }
            if (xlData[i].id == '16002') {
                var bsPrice = xlData[i].minimum;
            }
            if (xlData[i].name == 'Manshaum Voodoo Doll') {
                var voodooPrice = xlData[i].minimum;
            }
            if (xlData[i].id == '16001') {
                var bswPrice = xlData[i].minimum;
            }
            if (xlData[i].name == 'Forest Fury') {
                var furyPrice = xlData[i].minimum;
            }
            if (xlData[i].name == 'Narc Ear Accessory') {
                var narcPrice = xlData[i].minimum;
            }
            if (xlData[i].name == 'Caphras Stone') {
                var caphraPrice = xlData[i].minimum;
            }
            if (xlData[i].name == 'Rainbow Gem Fruit') {
                var rainbowGem = xlData[i].maximum;
            }
        }

        var numberVoodoo = args[0]
        if (args[1] != null) memPrice = args[1]
        if (args[2] != null) bsPrice = args[2]
        var caphrasVoodoo = numberVoodoo * 0.505
        var bsaVoodoo = Math.floor(numberVoodoo * 9.06 + numberVoodoo / 2)
        var bswVoodoo = Math.floor(numberVoodoo * 4.032)
        var furyVoodoo = Math.floor(numberVoodoo * 0.025)
        var petalsVoodoo = Math.floor(numberVoodoo * 3)
        var narcVoodoo = Math.floor(numberVoodoo * 0.0016)
        var trashVoodoo = Math.floor(numberVoodoo * 1.518)
        var waterVoodoo = Math.floor(numberVoodoo * 0.275, -2)
        var sumVoodoo = ((caphrasVoodoo * caphraPrice + bsaVoodoo * bsPrice + bswVoodoo * bswPrice + furyVoodoo * furyPrice + petalsVoodoo * rainbowGem + narcVoodoo * narcPrice) * 0.845) + Math.floor(trashVoodoo * 8000) + Math.floor(waterVoodoo * 50000)
        var profitVoodoo = sumVoodoo - (voodooPrice * numberVoodoo * 5)
        var voodooROI = profitVoodoo / sumVoodoo * 100
        const voodooEmbed = new Discord.MessageEmbed()
            .setColor('#fffc30')
            .setTitle('Voodoo Average Outcome')
            .setDescription(`Your expected outcome for ${numberVoodoo} Scrolls based on averages is`)
            .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/03_quest_item/00041619.png')
            .addFields(
                {name: 'Caphra Stone', value: Math.round(caphrasVoodoo), inline: true},
                {name: 'Black Stone (Armor)', value: Math.round(bsaVoodoo), inline: true},
                {name: 'Black Stone (Weapon)', value: Math.round(bswVoodoo), inline: true},
                {name: 'Forest Fury', value: Math.round(furyVoodoo), inline: true},
                {name: 'Peridot Petals', value: Math.round(petalsVoodoo), inline: true},
                {name: 'Narc Ear Accessory', value: Math.round(narcVoodoo), inline: true},
                {name: 'Water Spirit Stone Fragment', value: Math.round(waterVoodoo), inline: true},
                {name: 'Narc Magic Mark', value: Math.round(trashVoodoo), inline: true},
            )
            .addField('The total estimated value after taxes is', Math.round(sumVoodoo).toLocaleString(), true)
            .addField('Your estimated profit is', Math.round(profitVoodoo).toLocaleString(), true)
            .addField(`ROI`, `${voodooROI.toFixed(2)}%`, true)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL());
        msg.reply(voodooEmbed)
    }


    //To exit the loop for boss timer
    //var i;

    //To exit the loop for imperial reset
    //var b;

    //var f;

    if (command === "imagesearch") {
        //var imageSearch  = args[0]
        var search = args.slice(0).join(" ");
        image(msg);

        function image(msg) {

            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + search,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };

            request(options, function (error, response, responseBody) {
                if (error) {
                    return;
                }


                $ = cheerio.load(responseBody);


                var links = $(".image a.link");

                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

                //console.log(urls);

                if (!urls.length) {

                    return;
                }

                const imageSend = new Discord.MessageEmbed()
                    .setColor('#b50721')
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                msg.channel.send(imageSend);
            });

        }

    }

    if (command === "changeBotImage") {
        var newImage = args[0]
        client.user.setAvatar(newImage);
    }
	
	if (command === "vinegar") {
		var vinegar = args[0]
		var paprika = 8
		var misc = 2;
		var paprikaAmount;
		var miscAmount;
		
		paprikaAmount = vinegar / 4 * 8;
		miscAmount = vinegar / 4 * 2;
		
			const totalPaprika = new Discord.MessageEmbed()
				.setColor('#b50721')
				.setTitle("Pickled Veg calculations")
               // .setThumbnail(`https://cdn.discordapp.com/attachments/727859626128965699/728712737290715296/energy.png`)
				.addField('Paprika to buy', paprikaAmount, true)
				.addField('Sugar and Leavening Agent to buy', miscAmount, true)
                .setTimestamp()
                .setFooter(client.user.username, client.user.avatarURL());
                msg.reply(totalPaprika);
    }

    //Energy math
    if (command === "energy") {
        if (args[1] == null) {
            if (args[2] == null) {
                if (args[3] == null) {
                    const energyTime = new Discord.MessageEmbed()
                        .setColor('#b50721')
                        .setTitle("Time till max energy")
                        .setDescription("Please type your current and total energy along with if you have a kama blessing(k or n).")
                        .setThumbnail(`https://cdn.discordapp.com/attachments/727859626128965699/728712737290715296/energy.png`)
                        .setTimestamp()
                        .setFooter(client.user.username, client.user.avatarURL());
                    msg.reply(energyTime);
                    var e = 1;
                }
            }
        }
        if (e != 1) {
            if (args[0] == args[1]) {
                const energyTime = new Discord.MessageEmbed()
                    .setColor('#b50721')
                    .setTitle("Time till max energy")
                    .setDescription("You have full energy!")
                    .setThumbnail(`https://cdn.discordapp.com/attachments/727859626128965699/728712737290715296/energy.png`)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                msg.reply(energyTime);

            } else {

                var currentEnergy = parseInt(args[0])
                var energyTotal = parseInt(args[1])
                var kamaBlessing = args[2]

                var difference = energyTotal - currentEnergy;

                //No kama
                var conversion = difference * 3;
                var totalHours = Math.floor(conversion / 60);
                var totalMins = conversion % 60;

                //Kama
                var totalHoursKama = Math.floor(difference / 60);
                var totalMinsKama = difference % 60;

                //Kama offline
                var hoursOfflineKama = difference * 20;
                var totalHoursOfflineKama = Math.floor(hoursOfflineKama / 60);

                //Offline normal
                var hoursOffline = difference * 60;
                var totalHoursOffline = Math.floor(hoursOffline / 60);

                if (kamaBlessing.includes('k')) {
                    if (totalHoursKama != 0) {
                        if (totalHoursKama == 1) {
                            const energyTime = new Discord.MessageEmbed()
                                .setColor('#b50721')
                                .setTitle("Time till max energy with Kama Blessing")
                                .setDescription("It will take you " + totalHoursKama + " hour and " + totalMinsKama + " minutes till max energy if you are logged in, but " + totalHoursOfflineKama + " hours if you are offline.")
                                .setThumbnail(`https://cdn.discordapp.com/attachments/727859626128965699/728712737290715296/energy.png`)
                                .setTimestamp()
                                .setFooter(client.user.username, client.user.avatarURL());
                            msg.reply(energyTime);
                        }
                        if (totalHoursKama > 1) {
                            const energyTime = new Discord.MessageEmbed()
                                .setColor('#b50721')
                                .setTitle("Time till max energy with Kama Blessing")
                                .setDescription("It will take you " + totalHoursKama + " hours and " + totalMinsKama + " minutes till max energy if you are logged in, but " + totalHoursOfflineKama + " hours if you are offline.")
                                .setThumbnail(`https://cdn.discordapp.com/attachments/727859626128965699/728712737290715296/energy.png`)
                                .setTimestamp()
                                .setFooter(client.user.username, client.user.avatarURL());
                            msg.reply(energyTime);
                        }
                    } else {

                        const energyTime = new Discord.MessageEmbed()
                            .setColor('#b50721')
                            .setTitle("Time till max energy with Kama Blessing")
                            .setDescription("It will take you " + totalMinsKama + " minutes till max energy if you are logged in, but " + totalHoursOfflineKama + " hours if you are offline.")
                            .setThumbnail(`https://cdn.discordapp.com/attachments/727859626128965699/728712737290715296/energy.png`)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        msg.reply(energyTime);
                    }

                } else if (kamaBlessing != 'k') {
                    if (totalHours != 0) {
                        const energyTime = new Discord.MessageEmbed()
                            .setColor('#b50721')
                            .setTitle("Time till max energy without Kama Blessing")
                            .setDescription("It will take you " + totalHours + " hours and " + totalMins + " minutes till max energy if you are logged in, but " + totalHoursOffline + " hours if you are offline.")
                            .setThumbnail(`https://cdn.discordapp.com/attachments/727859626128965699/728712737290715296/energy.png`)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        msg.reply(energyTime);

                    } else {

                        const energyTime = new Discord.MessageEmbed()
                            .setColor('#b50721')
                            .setTitle("Time till max energy without Kama Blessing")
                            .setDescription("It will take you " + totalMins + " minutes till max energy if you are logged in, but " + totalHoursOffline + " hours if you are offline.")
                            .setThumbnail(`https://cdn.discordapp.com/attachments/727859626128965699/728712737290715296/energy.png`)
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.avatarURL());
                        msg.reply(energyTime);
                    }
                }
                e = 0;
            }
        }

    }

    if (command == "dice") {
        const rollDiceReminder = new Discord.MessageEmbed()
            .setColor('#b50721')
            .setTitle("Dice Reminder Set!")
            .setDescription("You should roll your dice!")
            .setThumbnail(`https://cdn.discordapp.com/attachments/727241046118891565/731057354086547467/dice.png`)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL());
        msg.reply(rollDiceReminder);
        const filter = m => m.author.id === msg.author.id;
        msg.channel.awaitMessages(filter, {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content === "dice stop") {
                dice = 4;
                msg.reply("Dice Reminder has been stopped");
            }
        })
        var interval = setInterval(function () {
            if (dice != 4) {
                dice++
                const rollDice = new Discord.MessageEmbed()
                    .setColor('#b50721')
                    .setTitle("Dice Reminder")
                    .setDescription("You should roll your dice!")
                    .setThumbnail(`https://cdn.discordapp.com/attachments/727241046118891565/731057354086547467/dice.png`)
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.avatarURL());
                msg.reply(rollDice);
            }
            msg.channel.awaitMessages(filter, {max: 1, time: 1800000}).then(collected => {
                if (collected.first().content === "dice stop") {
                    dice = 4;
                    msg.reply("Dice Reminder has been stopped");
                }
            })
        }, 1800000);//1800000

        msg.channel.awaitMessages(filter, {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content === "dice stop") {
                dice = 4;
                msg.reply("Dice Reminder has been stopped");
            }
        })

    }

    //Delets all messages in bot startup
    if (command == "cleanUp") {
        botStartup.bulkDelete(100)
            .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
            .catch(console.error);
    }

    const accessoriesMP = client.channels.cache.get('730062159672901664');
    const scrollsMP = client.channels.cache.get('730062187439325285');
    const bossArmorMP = client.channels.cache.get('730062241197719633');
    const weaponsMP = client.channels.cache.get('730062622761811968');

    if (command == "cleanUpMP") {
        accessoriesMP.bulkDelete(100)
        scrollsMP.bulkDelete(100)
        bossArmorMP.bulkDelete(100)
        weaponsMP.bulkDelete(100)
            .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
            .catch(console.error);
    }

    // accessories 730062159672901664
    // scrolls BS 730062187439325285
    // boss armors 730062241197719633
    // weapons 730062622761811968

    /**
     if(command === "farm"){
		var plant  = args[0]
		var farmtimer = 1
		var icon = ""
		var name = ""
		
		if(plant.includes('dalvenia')){
		 client.channels.cache.get('727859626128965699').send("Dalvenia init");
          farmtimer = 2000
          name = "Dalvenia Alrea"
          icon = "https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00005486.png"
          var dalvenia = setInterval(function(){ 
           console.log("Interval Started")
          const dalveniaEmbed = new Discord.MessageEmbed()
          .setColor('#1c871a')
          .setTitle("Replant Reminder")
          .setDescription("Replant your Dalvenia Alrea")
          .setThumbnail("https://bdocodex.com/items/new_icon/03_etc/07_productmaterial/00005486.png")
          .setTimestamp()
          .setFooter('Whale bot', 'https://i.imgur.com/9JMLpX9.png');
          msg.reply(dalveniaEmbed)
			},
         farmtimer);
          client.channels.cache.get('727859626128965699').send(`timer for Dalvenia set to ${farmtimer/1000} seconds`);
			}
	}

     //Starts imperial reset timer
     if(command === "imperialReset"){
		console.log(`Imperial reset timer has started!`); 
		
		var interval = setInterval (function (){
			var date = new Date();
			if(date.getHours() === 04 && date.getMinutes() === 00){
				if(b != 1){
					b = 1;
					general.send("Imperial's have been reset")
				}
			}
			if(date.getHours() === 08 && date.getMinutes() === 00){
				if(b != 2){
					b = 2;
					general.send("Imperial's have been reset")
				}
			}		
			if(date.getHours() === 12 && date.getMinutes() === 00){
				if(b != 3){
					b = 3;
					general.send("Imperial's have been reset")
				}
			}		
			if(date.getHours() === 16 && date.getMinutes() === 00){
				if(b != 4){
					b = 4;
					general.send("Imperial's have been reset")
				}
			}		
			if(date.getHours() === 20 && date.getMinutes() === 00){
				if(b != 5){
					b = 5;
					general.send("Imperial's have been reset")
				}
			}			
			if(date.getHours() === 24 && date.getMinutes() === 00){
				if(b != 6){
					b = 6;
					general.send("Imperial's have been reset")
				}
			}		
		},1000);
	}
     //Starts boss spawn timer
     if(command === "bossSpawn"){
		console.log(`Boss timer has started!`); 	
		
		var interval = setInterval (function (){
			var date = new Date();
			if(date.getHours() === 14 && date.getMinutes() === 50){
				if(i != 1){
				i = 1;
				//msg.channel.send("@everyone")
				const kutumEmbed = new Discord.MessageEmbed()
				.setColor('#8a0b0b')
				.setTitle(`Kutum spawning`)
				.setDescription(`Kutum spawning in 10 minutes!`)
				.setThumbnail('  https://bdocodex.com/items/ui_artwork/ic_04389.png')
				.setTimestamp()
				.setFooter('Turtle Bot', 'https://i.imgur.com/9JMLpX9.png');
				bossAlerts.send(kutumEmbed)				
				}	
			}
			
			if(date.getHours() === 17 && date.getMinutes() === 47){
				if(i != 2){
				i = 2;
				bossAlerts.send("@everyone")
				const vellEmbed = new Discord.MessageEmbed()
				.setColor('#8a0b0b')
				.setTitle(`Don't forget vell!`)
				.setDescription(`Vell spawning in 15 minuets!`)
				.setThumbnail('  https://mmotimer.com/img/vell_big.png')
				.setTimestamp()
				.setFooter('Turtle Bot', 'https://i.imgur.com/9JMLpX9.png');
				bossAlerts.send(vellEmbed)				
				}	
			}			
		},1000);	
	}

     */

});

client.login(process.env.SECRET);