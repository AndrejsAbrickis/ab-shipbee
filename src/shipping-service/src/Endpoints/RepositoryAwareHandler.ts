import { useRepository } from 'src/Infrastructure/DbContext';
import { Repository } from 'typeorm';

export class RepositoryAwareHandler<TEntity> {
  repository: Repository<TEntity>;

  constructor(entityType) {
    this.repository = useRepository<TEntity>(entityType);
  }
}
