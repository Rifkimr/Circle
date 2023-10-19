import { Repository, Tree } from "typeorm";
import { AppDataSource } from "../data-source";
import { Like } from "../entities/Like";

class LikesService {
  private readonly likeRepository: Repository<Like> =
    AppDataSource.getRepository(Like);

  async create(reqBody: any, loginSession: any): Promise<any> {
    try {
      const isLikeExist = await this.likeRepository.count({
        where: {
          user: {
            id: loginSession.user.id,
          },
          thread: {
            id: reqBody.thread_id,
          },
        },
      });

      if (isLikeExist > 0) {
        throw new Error("You already like this thread!");
      }

      const like = this.likeRepository.create({
        thread: {
          id: reqBody.thread_id,
        },
        user: {
          id: loginSession.user.id,
        },
      });

      await this.likeRepository.save(like);

      return {
        message: "You liked this thread!",
        like: like,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(threadId: number, loginSession: any): Promise<any> {
    try {
      const like = await this.likeRepository.findOne({
        where: {
          thread: {
            id: threadId,
          },
          user: {
            id: loginSession.user.id,
          },
        },
      });

      if (!like) {
        throw new Error("You didn't like this thread!");
      }

      await this.likeRepository.delete({
        id: like.id,
      });

      return {
        message: "You unliked this thread!",
        like: like,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new LikesService();
