// public class Main {
//     public static void main(String[] args) {
//         System.out.println("sak sl mey");
//     }
// }
// public class Main {
//   public static void main(String[] args) {

//     int day =18;
  
//     switch (day) {
//       case 18:
//         System.out.println("no");
//         break;
//       case 2:
//         System.out.println("yes");
//         break;
   
//     }
//   }
// }



// public class Main {
//   public static void main(String[] args) {
//     int a= 1;
//     int b= -4;
//     int c= 4;

//     int d= b*b;
//     int e=d-4*a*c;
//  if(e==0){
//  int x3=-b/(2*a);
//  System.out.println(x3);
//  } else if(e>1){
//     System.out.println(e);
//     double x1=(-(b + Math.sqrt(e))/(2*a));
//     double x2=(-(b - Math.sqrt(e))/(2*a));
//     System.out.println(x2);
//      System.out.println(x1);}

       

//   }
// }

// public class Main {

//    public static void main(String[] args) {
    
//        ///Practice2
//  String data= "<html><body><p>IT Y2<p><div>Hello</div><p>Java Program</p></body></html>";
// print value in second p

//Test value
//  String data= "<html><body><p>IT</p><div>A</div><p>Java Program Test</p></body></html>";
///Practice2
//  String data= "<html><body><p>IT Y2</p><div>Hello</div><p>Java Program</p></body></html>";
// print value in second p

//Test value
//  String data= "<html><body><p>IT</p><div>A</div><p>Java Program Test</p></body></html>";
//  String data= "<html><body><p>IT</p><div>A</div><h1>A</h1><p>Program Test</p><br></body></html>";
//  String a = "<html>";
//  String b = "</html";
//  String f = "Program Test";

//  int o = data.indexOf(a);
//  int l = data.indexOf(f);
//  int k = data.indexOf(b);

// //  int v = data.indexOf(a)+a.length();
// //  int c = data.indexOf(b);
// String t = data.substring(l,k);

// String g = data.substring(o,l);
// System.out.println(g);
// System.out.println(t);
        //write a program print 
        //1. data in head
        //2. data in title
        //3. data in body


// data.indexOf
// startTag.length
// data.substring

//    }
// }
// <dependency>
//     <groupId>org.jsoup</groupId>
//     <artifactId>jsoup</artifactId>
//     <version>1.15.3</version>
// </dependency>

// import org.jsoup.Jsoup;
// import org.jsoup.nodes.Document;
// import org.jsoup.nodes.Element;

// public class GetExchangeRate {
//     public static void main(String[] args) {
//         try {
//             // ដាក់ URL របស់វេបសាយធនាគារជាតិ ឬប្រភពដែលអ្នកចង់ទាញ
//             String url = "https://www.nbc.gov.kh/english/economic_research/exchange_rate.php"; 
//             Document doc = Jsoup.connect(url).get();

//             // ប្រើ Selector ដើម្បីចាប់យកអក្សរ 4010
//             // អ្នកត្រូវមើលក្នុង Inspect Element ថាវាស្ថិតក្នុង tag អ្វី (ឧទាហរណ៍៖ span ឬ b)
//             String rateText = doc.select("បំណែក_CSS_Selector").text();

//             // បំប្លែងពី String ទៅជាលេខ ដើម្បីយកទៅគណនា
//             double rate = Double.parseDouble(rateText.replaceAll("[^0-9]", ""));
//             System.out.println("អត្រាប្តូរប្រាក់បច្ចុប្បន្នគឺ: " + rate);

//         } catch (Exception e) {
//             e.printStackTrace();
//         }
// //     }
// // }
// import org.jsoup.Jsoup;
// import org.jsoup.nodes.Document;

// public class GetExchangeRate {
//     public static void main(String[] args) {
//         try {
//             // ១. ដាក់ URL ផ្លូវការ (ឧទាហរណ៍៖ NBC)
//             String url = "https://www.nbc.gov.kh/khmer/economic_research/exchange_rate.php"; 
            
//             // ២. ប្រើ userAgent ដើម្បីបង្ការការបដិសេធពី Server
//             Document doc = Jsoup.connect(url)
//                                 .userAgent("Mozilla/5.0")
//                                 .get();

//             // ៣. ប្រើ Selector ដើម្បីចាប់យកតម្លៃ (អ្នកត្រូវ Inspect មើលក្នុងវេបសាយ)
//             // ឧទាហរណ៍៖ ប្រសិនបើលេខ 4010 នៅក្នុង <td class="rate">
//             String rateText = doc.select("td:contains(USD) + td").first().text();
            
//             // ៤. លុបអក្សរចេញ ទុកតែលេខ ហើយបំប្លែងទៅជា Double
//             String cleanRate = rateText.replaceAll("[^0-9]", "");
//             double rate = Double.parseDouble(cleanRate);
            
//             System.out.println("អត្រាប្តូរប្រាក់បច្ចុប្បន្នគឺ: " + rate + " KHR/USD");
            
//         } catch (Exception e) {
//             System.out.println("មានបញ្ហាក្នុងការទាញទិន្នន័យ: " + e.getMessage());
//         }
//     }
// }






// import org.jsoup.Jsoup;
// import org.jsoup.nodes.Document;
// import org.jsoup.nodes.Element;

// public class GetExchangeRate {
//     public static void main(String[] args) {
//         try {
//             // ១. អាសយដ្ឋានវេបសាយ NBC
//             String url = "https://www.nbc.gov.kh/english/economic_research/exchange_rate.php"; 
            
//             // ភ្ជាប់ទៅកាន់វេបសាយ
//             Document doc = Jsoup.connect(url)
//                                 .userAgent("Mozilla/5.0")
//                                 .timeout(10000)
//                                 .get();

//             // ២. ចាប់យក Element ពណ៌ក្រហម "ចុងក្រោយគេ" (.last()) ក្នុងតារាង
//             // ព្រោះលេខ 4010 ស្ថិតនៅក្រោមថ្ងៃខែ


//             if (rateElement != null) {
//                 String rateText = rateElement.text(); 
//                 System.out.println("Downloaded article : " + rateText);

//                 // ៣. បោសសម្អាតអត្ថបទ (ដកសញ្ញាក្បៀស និងចន្លោះទំនេរចេញ)
//                 String cleanNumber = rateText.replaceAll("[^0-9]", "");

//                 if (!cleanNumber.isEmpty()) {
//                     // បំប្លែងទៅជាលេខ Double
//                     double rate = Double.parseDouble(cleanNumber);
                    
//                     System.out.println("-----------------------------------");
//                     System.out.println("The official exchange rate is: " + rate + " KHR / USD");
//                     System.out.println("-----------------------------------");
                    
//                     // សាកល្បងគណនាប្តូរលុយ $100
//                     double myDollars = 100;
//                     double myKhmerRiel = myDollars * rate;
//                     System.out.println("$" + myDollars + "Changeable " + myKhmerRiel + " KHR");
//                     System.out.println("-----------------------------------");
//                 }
//             } else {
//                 System.out.println("Exchange rate data not found!");
//             }

//         } catch (Exception e) {
//             System.err.println("Error: " + e.getMessage());
//         }
//     }
// }

// import java.io.PrintStream;
// import java.nio.charset.StandardCharsets;
// public class Main {
//     public static void main(String[] args) {
//         System.out.println("សួស្តី! នេះគឺជាអក្សរខ្មែរ");
//     }
// }



// import org.jsoup.Jsoup;
// import org.jsoup.nodes.Document;
// import org.jsoup.nodes.Element;

// public class GetExchangeRate {
//     public static void main(String[] args) {
//         try {
//             String url = "https://www.bbc.com/weather/2643743"; 
//             Document doc = Jsoup.connect(url)
//                                 .userAgent("phat/5.0")
//                                 .timeout(10000)
//                                 .get();
//             Element rateElement = doc.select("#daylink-0 ").last();
// String Text = rateElement.text(); 
// System.out.println("time  " + Text);


//  String data= Text;
//  String a = "High";
//  String b = "Low";

//  int o = data.indexOf(a);
//  int k = data.indexOf(b);
// // String f = "low";
// //   int v = o + f;
// //  int c = data.indexOf(b);
// String t = data.substring(o,k);
// System.out.println(t);




// }catch (Exception e) {
//             System.err.println("Error: " + e.getMessage());
//         }
//     }
// }