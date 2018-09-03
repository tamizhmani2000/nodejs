import java.net.*;
import java.io.*;

public class Spider {
    public static void main(String[] args) throws Exception {
        URL url = new URL("http://www.neimanmarcus.com/Alice-Olivia-Jade-Multicolor-Fur-Vest-Capes-Ponchos-Vests/prod202400331_cat34000734__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat34000734%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod202400331&cmCat=product");
        CookieManager.setDefault(new CookieManager(null, CookiePolicy.ACCEPT_NONE));
        URLConnection yc = url.openConnection();
        BufferedReader in = new BufferedReader(
                                new InputStreamReader(
                                yc.getInputStream()));
        String inputLine;

        while ((inputLine = in.readLine()) != null) 
            System.out.println(inputLine);
        in.close();
    }
}