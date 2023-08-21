package corejava.prog;


public class Test {


    public static void main(String[] args) {

        //System.out.println("test");

  /*Map<Color, String> map = new HashMap<Color,String>();
  map.put(new Color("Blue"), "Blue");

        System.out.println(map.get(new Color("Blue")));*/
        MayClass t = new MayClass();
        System.out.println(t.x);

    }


}

class MayClass {
    int x=85;
    MayClass(){
        x=41;
    }
    {
        x=27;
    }


        }