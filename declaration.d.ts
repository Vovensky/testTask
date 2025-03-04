declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  declare module '*.css' {
    const content: string;
    export default content;
  }

  declare module "*.jpg" {
    const value: string;
    export default value;
  }
  