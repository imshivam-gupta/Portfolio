import java.awt.*;

public class x extends java.applet.Applet {
    TextField inputA,inputB;

    public void init(){
        inputA = new TextField(8);
        inputB = new TextField(8);
        add(inputA);
        add(inputB);
        inputA.setText("0");
        inputB.setText("1");
    }
    
    public void paint(Graphics g){
        int x = 0; int y = 0, z = 0;
        String s;
        g.drawString("Enter 2 values", 10, 50);

        try{
            s = inputA.getText();
            x = Integer.parseInt(s);
            s = inputB.getText();
            y = Integer.parseInt(s);
            z = x + y;
            s = String.valueOf(z);
            g.drawString("The sum is ", 10, 75);
        } catch (Exception e) {}
    }
    public static void main(String[] args) {
        x applet = new x();
        Frame frame = new Frame("Applet Window");

        frame.add(applet);
        frame.setSize(200,200);
        frame.setVisible(true);
    }
}



