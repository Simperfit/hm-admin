import { URLSearchParams } from '@angular/http';
export const urlHelper = {

  /**
   * get path with params
   *
   * @param {string} url
   * @param {any} additionnalParams
   *
   * @returns {string}
   */
  getPath(url: string, additionnalParams: any): string {
    console.log(url);
    const [path, ] = url.split('?');
    return path + urlHelper.getParams(url, additionnalParams);
  },

  /**
   * transform parameter's object to URL parameters
   *
   * @param {string} url
   * @param {string} params
   *
   * @returns {string}
   */
  getParams(url: string, params: any): string {
    const currentParams = urlHelper.getUrlParams(url);

    Object.keys(params).forEach(key => {
          currentParams.set(key, params[key]);
        });


    return currentParams ? currentParams.toString() : '';
  },

  /**
   * extract parameters from URL
   *
   * @param url
   *
   * @returns {any}
   */
  getUrlParams(url): URLSearchParams {
    let urlParams: URLSearchParams;
    const [, ...params] = url.split(/[\?\&]/g);

    params.forEach(param => {
      const [, key, value, ] = param.match(/(\w*)=(\w*)/);
      let urlParams: URLSearchParams;
      if (key !== undefined) {
        urlParams.set(key, value);
      }
    });

    return urlParams;
  }

};
