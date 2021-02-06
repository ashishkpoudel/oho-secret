import appConfig from 'config/app';
import { dbConnection } from 'database';
import app from 'app';

app.listen(appConfig.port, async () => {
  await dbConnection();
});
