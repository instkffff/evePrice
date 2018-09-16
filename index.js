require('dotenv').config({path:'./config.env'})
const Telegraf = require('telegraf')
const ep = require('evepraisal')
const bot = new Telegraf(process.env.BOT_TOKEN)
const commandParts = require('telegraf-command-parts')

bot.use(commandParts())

bot.command('price',(ctx) => {

    let item = ctx.state.command.args
    console.log(ctx.state.command.args)
    ep.create(
      `${item}`,
      'jita',
      {}
    ).then(
      (a) => {
        console.log(a.appraisal.totals.sell)

        ctx.reply(`JitaSellPrice:${a.appraisal.totals.sell} isk 
JitaBuyPrice:${a.appraisal.totals.buy} isk`)
        }
    )
})

bot.startPolling()