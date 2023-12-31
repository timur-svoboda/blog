import { ArticleDto } from '../dto/article-dto';
import { ResourceDto } from '../dto/resource-dto';

export class ArticleService {
  public static async findOne(id: number): Promise<ResourceDto<ArticleDto>> {
    const response = await fetch(
      `${process.env.API_URL}/api/articles/${id}?populate=thumbnail`,
    );

    return response.json();
  }

  public static async find(): Promise<ResourceDto<ArticleDto[]>> {
    const response = await fetch(
      `${process.env.API_URL}/api/articles?populate=thumbnail&sort=createdAt:desc`,
    );

    return response.json();
  }
}
