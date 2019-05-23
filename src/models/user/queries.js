module.exports = {

  /**
   * GET ALL USERS
   */ 
    GET_ALL: 
      `SELECT u.pk_user AS id, u.name, u.middle_name AS middleName, u.last_name AS lastName, u.email, u.address, ua.music, ua.cinema, ua.art 
        FROM public.user u INNER JOIN public.user_additional ua ON u.pk_user=ua.pk_user`,

  /**
   * CHECK IF USER EXISTS BY EMAIL
   */
  CHECK_USER_BY_EMAIL: 
    `SELECT pk_user id, name, middle_name, last_name, email, address FROM public.user WHERE email=$1`,

  /**
   * INSERT USER DATA
   */
  CREATE_USER: 
    `INSERT INTO public.user (name, middle_name, last_name, email, address) 
      VALUES ($1, $2, $3, $4, $5) RETURNING pk_user AS id`,
  
  /**
   * INSERT USER ADDITIONAL INFO
   */
  ADD_USER_ADDITIONAL_INFO: 
    `INSERT INTO public.user_additional (pk_user, art, cinema, music) 
      VALUES ($1, $2, $3, $4)`,
      
}