/**
 * @swagger
 * /users/registry:
 *  post:
 *    summary: User registry account
 *    tags:
 *      - Users
 *    parameters:
 *      - in: body
 *        name: body
 *        required: true
 *        type: object
 *        properties:
 *          fullName:
 *            type: string
 *          userName:
 *            type: string
 *          passWord:
 *            type: string
 *          email:
 *            type: string
 *          phoneNumber:
 *            type: string
 *        example: {
 *          "fullName": "Nguyen Van A",
 *          "userName": "username",
 *          "passWord": "123123",
 *          "email": "nguyenvana@gmail.com",
 *          "phoneNumber": "0964030454"
 *        }
 *    responses:
 *       200:
 *         description: The response details
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               type: boolean
 *             payload:
 *               type: string
 *               description: Data result
 *           example: {
 *             'success': true,
 *             'data': {
                  "_id": "5e4410ba6050033ea0a46b2b",
                  "fullName": "Nguyen Van A",
                  "userName": "usernameee",
                  "email": "nguyenvaneea@gmail.com",
                  "phoneNumber": "0964030454",
                  "createdAt": "2020-02-12T14:50:34.758Z",
                  "updatedAt": "2020-02-12T14:50:34.758Z"
                }
 *           }
 *       401:
 *         description: Not permission
 *       404:
 *         description: Dat not found
 *       422:
 *         description: Unprocessable Entity, the data is not valid
 *       500:
 *         description: When got server exception
 * */
