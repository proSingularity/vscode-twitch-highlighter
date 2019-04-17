/**
 * This will log to Discord if connected and the console
 * @param level
 * @param message
 */
export const log = (level: string, message: string, obj?: any) => {
  const captains: any = console;
  captains[level](message, obj);
};
