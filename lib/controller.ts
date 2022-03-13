import { Body, Delete, Get, JsonController, OnUndefined, Post, QueryParam } from "routing-controllers";
import { Item } from "./bestand";
import { prisma } from "./db";

@JsonController()
export class Controller {
  @Get('/entries')
  getAllEntries() {
    return prisma.bestand.findMany()
  }
  @Post('/entries')
  @OnUndefined(200)
  async setAllEntries(@Body() bestand: Item[]) {
    for (const item of bestand) {
      await prisma.bestand.upsert({
        where: { id: item.id || -1 },
        create: { anzahl: item.anzahl, gewicht: item.gewicht, mhd: new Date(item.mhd), name: item.name, verpackung: item.verpackung },
        update: { anzahl: item.anzahl, gewicht: item.gewicht, mhd: new Date(item.mhd), name: item.name, verpackung: item.verpackung }
      })
    }
  }
  @Get('/newentry')
  async newEntry(){
    return prisma.bestand.create({data: {anzahl: 1, gewicht: 0, mhd: new Date(), name: '', verpackung: 'Packung'}})
  }
  @Delete('/deleteentry')
  @OnUndefined(200)
  async deleteEntry(@QueryParam('id') id: number){
    await prisma.bestand.delete({where: {id}})
  }
}