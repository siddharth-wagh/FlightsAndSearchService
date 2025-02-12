class CrudService {
    constructor(Repository) {
        this.Repository = Repository;
    }

    async create(data) {
        try {
            const result = await this.Repository.create(data);
            return result;
        } catch (error) {
            console.log("Something off in newcity-service");
            throw error;
        }
    }
    async destroy(Id) {
        try {
            const result = await this.Repository.destroy(Id);
            return result;
        } catch (error) {
            console.log("Something off in newcity-service");
            throw error;
        }
    }

    async get(Id) {
        try {
            const result = await this.Repository.get(Id);
            return result;
        } catch (error) {
            console.log("Something off in newcity-service");
            throw error;
        }
    }
    async getAll() {
        try {
            const result = await this.Repository.getAll();
            return result;
        } catch (error) {
            console.log("Something off in newcity-service");
            throw error;
        }
    }

    async update(Id,data) {
        try {
            const result = await this.Repository.update(data,Id);
        } catch (error) {
            console.log("Something off in newcity-service");
            throw error;
        }
    }
} 

module.exports = CrudService;