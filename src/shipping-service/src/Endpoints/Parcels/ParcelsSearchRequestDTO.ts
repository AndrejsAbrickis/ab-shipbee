import { IsNotEmpty, IsOptional } from 'class-validator';

export class ParcelsSearchRequestDTO {
  @IsOptional()
  public country: string;

  @IsOptional()
  public search: string;
}
