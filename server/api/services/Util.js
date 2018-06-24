/**
 * Created by edwardtidbury on 07/04/2017.
 */

const md5 = require('md5');

module.exports = {
    /**
     * e.g. myVar! is great   -> my_var_is_great
     *
     * @param label
     * @returns {string|null} Converted URI Name
     */
    convertStrToURILabel: function (label) {
        if (!label || !label.length) {
            return null;
        }

        return label.replace(/[^a-zA-Z0-9.\-\s]/g, '').replace(/([a-z])([A-Z])/g, '$1 $2').trim().replace(/ /g, '_').toLowerCase();
    },
    generateSafeFileName: function (filename) {

        let p = filename.split('.');
        const extension = p && p[p.length - 1];
        if (!extension) {
            throw('Util.generateSafeFileName: Specified a file name without an extension');
        }

        return filename.replace('.' + extension, '').replace(/[^a-zA-Z0-9_]+/ig, '') + md5(filename + Math.random()) + '.' + extension;
    },
    checkRequiredProps: function (obj, props) {
        for (let required in props) {
            if (obj.hasOwnProperty(required) && typeof obj[required] !== 'undefined') {
                throw new Error('Required parameter not set: ' + required);
            }
        }
    },

    extendModelWithGlobalTypes: function (model) {

        const globalTypes = {};


        return _.merge(globalTypes, model);

    },

    /**
     * Populate an instance's association entity if not specified already.
     *
     * This method bypasses calling from model when already populated.
     *
     * @param EntityInstance
     * @param associationEntity
     * @returns {Promise}   ( association instance   ,  usedModelQuery: called model to find association or not)
     */
    populateEntityInstanceAssociation: function (EntityInstance, associationEntity) {

        return new Promise((resolve, reject) => {


            let usedQueryModel = false;

            const associationEntityModel = global[associationEntity];

            if (!associationEntityModel) {//check if model
                return reject(new Error('Failed to find association entity instance model: ' + associationEntity));
            }

            if (!EntityInstance.associations[associationEntity]) {
                return reject(new Error('Failed to find association registered with entity instance'));
            }


            if (EntityInstance[associationEntity]) {

                let response = {};

                if (EntityInstance[associationEntity].id) {

                    response = {usedQueryModel};
                    response[associationEntity] = EntityInstance[associationEntity];


                    resolve(response);
                } else {
                    usedQueryModel = true;
                    return associationEntityModel.findOne(EntityInstance[associationEntity]).then((foundAssociationInstance) => {

                        response = {usedQueryModel};
                        response[associationEntity] = foundAssociationInstance;

                        return resolve(response);
                    });
                }
            } else {
                return reject(new Error('Failed to find association entity with specified instance'));
            }

        });

    }
};
