package corejava.jdk8;

import java.io.*;

public class TestReader {
    static File file=new File("C:\\kareem\\AWS.txt");
    public static void main(String[] args) throws IOException {
        try(FileInputStream inputstream= new FileInputStream(file); FileOutputStream outStreamstream= new FileOutputStream(file)){

        } catch(IOException e){
            System.out.println(e);
        }
    }
}
