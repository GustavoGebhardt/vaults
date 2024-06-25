"use client"

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

export default function Page(){
    const [date, setDate] = useState<Date | undefined>(new Date())
    return(
        <>
            <div className="w-screen h-screen p-24 flex flex-col gap-10">
                <h1 className="font-bold text-3xl">Dashboard</h1>
                <div className="w-full rounded-lg flex flex-col gap-8 px-16">
                    <div className="w-full h-12 border rounded-lg">
                        
                    </div>
                    <div className="w-full flex justify-center items-start gap-10">
                        <Calendar mode="single" selected={date} onSelect={setDate}></Calendar>
                        <div className="flex flex-col gap-5">
                            <Card className="w-96 h-40">
                                <CardHeader>
                                    <CardTitle>Faturamento</CardTitle>
                                    <CardDescription>Configurações de exibição</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-4">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>Cambio</DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>Moeda</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>Dolar</DropdownMenuItem>
                                                <DropdownMenuItem>Euro</DropdownMenuItem>
                                                <DropdownMenuItem>Real</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>Formato</DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>Opção</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>Liquido</DropdownMenuItem>
                                                <DropdownMenuItem>Bruto</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>Porcentual</DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>Exibir</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>Sim</DropdownMenuItem>
                                                <DropdownMenuItem>Não</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="w-96 h-40 flex items-center">
                                <CardHeader>
                                    <CardTitle>R$ 1.000</CardTitle>
                                    <CardDescription>Faturamento da data selecionada</CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                        <Card className="w-96 h-full">
                            <CardHeader>
                                <CardTitle>Criar Meta</CardTitle>
                                <CardDescription>Adicionar meta de faturamento</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label>Nome</Label>
                                            <Input id="name" placeholder="Nome da meta" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label>Categoria</Label>
                                            <Select>
                                                <SelectTrigger id="framework">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value="cripto">Criptomoedas</SelectItem>
                                                    <SelectItem value="fundos">Fundos de Investimento</SelectItem>
                                                    <SelectItem value="acoes">Mercado de Ações</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancel</Button>
                                <Button
                                    onClick={() =>
                                        toast("Event has been created", {
                                          description: "Sunday, December 03, 2023 at 9:00 AM",
                                          action: {
                                            label: "Undo",
                                            onClick: () => console.log("Undo"),
                                          },
                                        })
                                      }
                                >Adicionar</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}