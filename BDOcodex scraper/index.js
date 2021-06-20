require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
var parseArgs = require('minimist')

    var $ = jQuery = require('jquery');
const csv = require('csv-parser');
var file = require('file-system');
var fs = require('fs');

var XLSX = require('xlsx')

    const path = require("path")

    const random = require('random')
    var parallel = require('run-parallel')

    const prefix = "!"

    const axios = require('axios');
const cheerio = require('cheerio');
const request = require("request-promise");
const url = "https://bdocodex.com/us/items/version/20210616/";

var fullItems = [];
var uniqueArray = [];
var finialIds = ""

    const pathToFileBot = path.join("C:/Users/bensa/Documents/Discord_Bot/Bot Talk Group/Bot2/KnowledgeID", "KnowledgeIds.csv")

    file.readFile === fs.readFile

    var workbookPrice = XLSX.readFile('C:/Users/bensa/Documents/Discord_Bot/Bot Talk Group/Bot2/KnowledgeID/test.txt');
var sheet_name_list_price = workbookPrice.SheetNames;
var xlDataPrice = XLSX.utils.sheet_to_json(workbookPrice.Sheets[sheet_name_list_price]);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

client.on('shardError', error => {
    console.error('A websocket connection encountered an error:', error);
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));

client.on('message', async msg => {

    const member = msg;
    console.log(member.author.username + " " + msg.content)

    if (!msg.content.startsWith(prefix))
        return;
    var args = msg.content.slice(prefix.length).split(' ');
    var command = args.shift();

    var msgarr = msg.content.split(" ")
        var opts = parseArgs(msgarr)
        delete opts._

        //Contains item IDs
        var array = [];
    var array2 = [];
    var array3 = [];
    //Contains most recent date
    var array4 = [];

    if (command == "te") {
        console.log(xlDataPrice)

    }

    /** Developed on ~ 18/06/2021
    Current date testing is: 16-06-2021 with the following IDs:
    [
    '48197',  '50152',  '331063', '430035', '430036', '430037',
    '430038', '430039', '430040', '430041', '430042', '430043',
    '606001', '606002', '606003', '606004', '606005', '606006',
    '606007', '606008', '606009', '606010', '606011', '606012',
    '606013', '606014', '606015', '606016', '606017', '606018',
    '606019', '606020', '606021', '606022', '606023', '606024',
    '606025', '606026', '606027', '606028', '606029', '606030',
    '606031', '606032', '606033', '606034', '606035', '606036',
    '606037', '606038', '606039', '606040', '606041', '606042',
    '606043', '606044', '606045', '606046', '606047', '606048',
    '606049', '606050', '606051', '606052', '606053', '606054',
    '606055', '606056', '606057', '752082', '752083', '752084',
    '752085', '757345', '757346', '757347', '757348', '757349',
    '757350', '757351', '757352', '757353', '757354', '757355'
    ]

    CHECK ON NEXT PATCH IF THIS CHANGED SUCCESSFULLY
     */

    if (command == "patchItems") {

        const result2 = await request.get("https://bdocodex.com/us/");

        const $$ = cheerio.load(result2);

        //Finds dates for all recently added items from patch
        $$("body > nav > div.container2").each((index, element) => {
            //console.log($(element).text());
            var testing = $$(element).text().split('\n');
            for (var i = 0; i < testing.length; i++) {
                array2.push((testing[i].substring(1, testing[i].length - 1)).split(",")[0]);
            }
            array3.push(array2[19]);
        });
        //Adds it all to an array full of dates ordered dd-mm-yyyy
        array4.push(array3.toString().replace(/\s/g, '').match(/.{1,10}/g)[0]);

        const test2 = array4.toString();
        //Reverses to yyyymmdd
        const test3 = test2.split("-").reverse().join("");

        const result = await request.get("https://bdocodex.com/query.php?a=items&type=version&slot=" + test3 + "&l=us");

        const $ = cheerio.load(result);

        //Uses first date in the list search for the page full of items added that patch
        $("body > div > div > b > div").each((index, element) => {
            var test = $(element).text().split('data-id=\\"item-');
            for (var i = 0; i < test.length; i++) {
                array.push((test[i].substring(1, test[i].length - 1)).split("\\")[0]);
            }

        });
        //Adds it to an array full of item IDs
        array.shift();

        //Length of the ID arrray
        for (var i = 80; i < array.length; i++) {
            //Searches for the item
            const result3 = await request.get("https://bdocodex.com/us/item/" + array[i] + "/");
            console.log("Current position: " + i + "/" + array.length);
            const $$$ = cheerio.load(result3);

            //Searches for the specific item information and outputs it to another array
            $$$("body > div.container > div > div.col-sm-12.col-md-8.col-lg-9 > div > div.outer.item_info > div > table > tbody").each((index, element) => {
                fullItems.push($(element).text() + "\n" + "\n");

            });

            //console.log("First Item: " + "\n" + fullItems[0]);
            //console.log("\n" + "Last Item: " + "\n" + fullItems[fullItems.length-1]);

        }

        console.log("finished")

    }

    var knowledgeIds = [];
    /** Checklist of done ID's
    Character
    Topography
    Sea
    Ecology
    Adventure Journal
    Academics
    Life Skill
    Learning the ropes of Black Desert
    Trade
     */

    var csvId = "ID;";
    var csvName = "Name;";
    var csvCategory = "Category;";
    var csvDescription = "Description;";
    var csvLink = "Link;";
    var csvBlank = " ";

    var csvStartRow = [[csvId], [csvName], [csvCategory], [csvDescription], [csvLink]];

    var id;
    var itemName;
    var category;
    var description;
    var links;

    //https://bdocodex.com/us/theme/   from 0 - 10424 which includes all knowedge in the game
    if (command == "theme") {

        fs.appendFile('C:/Users/bensa/Documents/Discord_Bot/Bot Talk Group/Bot2/KnowledgeID/Knowledge.csv', csvStartRow.join(''), (err) => {
            if (err)
                throw err;
        });

        for (var i = 1; i <= 10424; i++) {
            const theme = await request.get("https://bdocodex.com/us/theme/" + i + "");
            const $ = cheerio.load(theme);
            console.log("Current theme id: " + i + "/10424")

            //ID
            $("body > div.container > div > div.col-sm-12.col-md-8.col-lg-9 > div > div.outer.item_info > div > table > tbody > tr:nth-child(1) > td").each((index, element) => {
                id = ($(element).text())
                //console.log($(element).text())
            });

            //Name
            $("#item_name").each((index, element) => {
                itemName = ($(element).text())
                //console.log($(element).text())
            });

            //Category
            $("body > div.container > div > div.col-sm-12.col-md-8.col-lg-9 > div > div.outer.item_info > div > table > tbody > tr:nth-child(4) > td.valign_top").each((index, element) => {
                category = ($(element).text())
                //console.log($(element).text())
            });

            //Description
            $("body > div.container > div > div.col-sm-12.col-md-8.col-lg-9 > div > div.outer.item_info > div > table > tbody > tr:nth-child(5) > td").each((index, element) => {
                description = ($(element).text())
                //console.log($(element).text())
            });

            //Link
            $('body > div.container > div > div.col-sm-12.col-md-8.col-lg-9 > div > div.outer.item_info > div > table > tbody > tr:nth-child(5) > td > a').each(function () {
                links = "https://bdocodex.com" + $(this).attr('href');
                //console.log(links)
            });

            var knowledgeData = [['\n'], [id], [itemName], [category], [description], [links]]
            var st = knowledgeData.join(';');

            var st2 = st.replace(/\r?\n|\r/g, " ")
                var st3 = "\n" + st2.substring(2)

                fs.appendFile('C:/Users/bensa/Documents/Discord_Bot/Bot Talk Group/Bot2/KnowledgeID/Knowledge.csv', st3, (err) => {
                if (err)
                    throw err;
            });

        }

    }

    //To gather the knowledge IDs
    if (command == "knowledge") {
        const knowledgeFind = await request.get("https://bdocodex.com/us/knowledge/");
        const $ = cheerio.load(knowledgeFind);

        /**
        Character - body > div.container > div > div.col-sm-12.col-md-8.col-lg-9 > div > div > div > div
        #theme_10 - #theme_32
        #theme_101 - #theme_300
        #base_theme_101 - #base_theme_193
         */

        $("body > div.container > div > div.col-sm-12.col-md-8.col-lg-9 > div > div > div > div").each((index, element) => {
            for (var i3 = 10; i3 <= 32; i3++) {
                $("#theme_10").each((index, element) => {
                    console.log("first " + i3)
                    for (var i2 = 101; i2 <= 300; i2++) {
                        $("#theme_" + i2 + "").each((index, element) => {
                            console.log("first " + i2)
                            for (var i = 101; i <= 193; i++) {
                                $('#base_theme_' + i + ' > a').each(function () {
                                    var knowledgeId = $(this).attr('data-tid');
                                    knowledgeIds.push(knowledgeId)
                                });
                            }
                        });
                    }
                });
            }
        });

        uniqueArray = knowledgeIds.filter(function (elem, pos) {
            return knowledgeIds.indexOf(elem) == pos;
        })

            fs.appendFile('C:/Users/bensa/Documents/Discord_Bot/Bot Talk Group/Bot2/KnowledgeID/KnowledgeIds.csv', uniqueArray.join('\n'), (err) => {
            if (err)
                throw err;
        });

        console.log(uniqueArray.length)
        console.log("finished")
    }

});

client.login(process.env.SECRET);
