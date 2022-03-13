import { IsDate, IsIn, IsISO8601, IsNumber, IsOptional, IsString } from "class-validator"

export const verpackunstypen = ['Packung', 'Dose', 'Glas'] as const

export type verpachungstyp = typeof verpackunstypen[number]

export class Item {
  @IsNumber()
  @IsOptional()
  id?: number
  @IsString()
  name: string
  @IsString()
  @IsIn(verpackunstypen)
  verpackung: verpachungstyp
  @IsNumber()
  gewicht: number
  @IsString()
  @IsISO8601()
  mhd: string
  @IsNumber()
  anzahl: number

  constructor (id: number, name: string, verpackung: verpachungstyp, gewicht: number, mhd: string, anzahl: number) {
    this.id = id
    this.name = name
    this.verpackung = verpackung
    this.gewicht = gewicht
    this.mhd = mhd
    this.anzahl = anzahl
  }
}
