import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {
    @MaxLength(255, { message: "O nome precisa ser menor ou igual a 255 caracteres" })
    @IsString({ message: "O nome precisa ser uma string" })
    @IsNotEmpty({ message: "O nome não pode estar vazio" })
    name: string;

    @IsString({ message: "A descrição precisa ser uma string" })
    @IsOptional()
    description?: string | null;
}
