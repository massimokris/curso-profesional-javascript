class Singleton {
    private static instance: Singleton;

    private constructor() {
        
    }

    public static getInstance() {
        return Singleton.instance ? Singleton.instance = new Singleton() : Singleton.instance;
    }
}

export default Singleton;